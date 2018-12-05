(ns fugue.envelope)

(defn perc [a d]
  (fn [{:keys [time value]}]
    (if (> value 0)
      #{{:time (+ time a) :value value}
        {:time (+ time a d) :value 0}}
      #{})))

(defn adsr [a d s r]
  (fn [{:keys [time value]}]
    (if (> value 0)
      #{{:time (+ time a) :value value}
        {:time (+ time a d) :value (* value s)}}
      #{{:time (+ time r) :value 0}})))

(defn packet [input]
  (cond
    (number? input) [{:time 0 :value input}]
    (map? input) [input]
    (iterable? input) input))

(defn env
  "Returns a transducer that maps gate events to schedule events."
  [env-fn]
  (comp
   ; make sure the input is a packet of gate events
   (map packet)
   ; map packets of gate events to packets of schedule events
   (map (partial mapcat env-fn))
   ;; ignore empty packets
   (filter not-empty)
   ;; start each packet with cancel and hold
   (map (partial cons {:time 0 :curve :cancel}))
   ;; flatten
   cat
   ; use an exponential curve by default
   (map (partial merge {:curve :exponential}))))


(comment

  ;; notes
  [{:note :c4 :time "0.0.0" :duration 1/2 :velo 1}]

  ;; midi events
  [{:type :note-on :note 60 :velo 127 :time 0}
   {:type :note-off :note 60 :velo 0 :time 2}]

  ;; gate values
  [{:time 0 :value 1}
   {:time 2 :value 0}]

  ;; parameter curves
  [
   ;; opening
   {:start 0.0 :target 1 :duration 0.03 :curve :exp}
   {:start 0.3 :target 0.8 :duration 0.06 :curve :exp}

   ;; closing
   {:start 2 :target 0 :duration 0.03 :curve :exp}
  ]

  ;; scheduler values
  [{:time 0 :curve :hold}
   {:time 0.3 :value 1 :curve :exp}
   {:time 0.3 :curve :hold}
   {:time 0.9 :value :0.8 :curve :exp}
   {:time 2 :curve :hold}
   {:time 2.03 :value 0 :curve :exp}]

   )
