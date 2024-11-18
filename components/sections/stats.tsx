"use client"

import { useInView } from "react-intersection-observer"
import CountUp from "react-countup"
import { motion } from "framer-motion"

const stats = [
  { id: 1, name: "Years of Experience", value: 25 },
  { id: 2, name: "Projects Completed", value: 500 },
  { id: 3, name: "Professional Team", value: 50 },
  { id: 4, name: "Happy Clients", value: 450 },
]

export function Stats() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <div className="bg-primary/5 py-24 sm:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl lg:max-w-none"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Trusted by Hundreds of Clients
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Our numbers speak for themselves
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.5, delay: stat.id * 0.1 }}
                className="flex flex-col gap-y-4 text-center"
              >
                <dt className="text-base leading-7 text-muted-foreground">
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight">
                  {inView ? (
                    <CountUp end={stat.value} duration={2.5} />
                  ) : (
                    <span>0</span>
                  )}
                  {stat.name === "Years of Experience" && "+"}
                  {stat.name === "Projects Completed" && "+"}
                </dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </div>
  )
}
