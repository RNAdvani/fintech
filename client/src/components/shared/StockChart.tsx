import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

function AnimatedStockChart({ data }) {
  const [animationProgress, setAnimationProgress] = useState(0)

  useEffect(() => {
    const animationDuration = 2000 // 2 seconds
    const startTime = Date.now()

    const animateChart = () => {
      const elapsedTime = Date.now() - startTime
      const progress = Math.min(elapsedTime / animationDuration, 1)
      setAnimationProgress(progress)

      if (progress < 1) {
        requestAnimationFrame(animateChart)
      }
    }

    animateChart()
  }, [])

  const CustomizedDot = (props) => {
    const { cx, cy, payload } = props
    const transactionPoint = data.trading_history.find(tp => tp.date === payload.Date)
    
    if (transactionPoint) {
      return (
        <motion.circle
          cx={cx}
          cy={cy}
          r={6}
          fill={transactionPoint.action === 'buy' ? '#4CAF50' : '#F44336'}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 2 * (data.stock_data.findIndex(d => d.Date === payload.Date) / data.stock_data.length) }}
        />
      )
    }
    return null
  }

  const animatedData = data.stock_data.slice(0, Math.ceil(data.stock_data.length * animationProgress))

  return (
    <div className="w-full h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={animatedData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis dataKey="Date" stroke="#a4a4a4" />
          <YAxis stroke="#a4a4a4" />
          <Tooltip
            contentStyle={{ backgroundColor: '#1e1b1b', border: 'none' }}
            labelStyle={{ color: '#f2f2f2' }}
            itemStyle={{ color: '#45d196' }}
          />
          <Line 
            type="monotone" 
            dataKey="Close" 
            stroke="#45d196" 
            strokeWidth={2} 
            dot={<CustomizedDot />}
            isAnimationActive={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default function StockChartModal({ data }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="highlight">View Stock Chart</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] bg-[#0c0a09]">
        <DialogHeader>
          <DialogTitle className="text-[#f2f2f2]">{data.symbol} Stock Price Chart</DialogTitle>
          <DialogDescription className="text-[#a4a4a4]">
            View the stock price trends and transaction points. Final capital: ${data.final_capital.toFixed(2)}, Profit: {data.profit_percentage.toFixed(2)}%
          </DialogDescription>
        </DialogHeader>
        <AnimatedStockChart data={data} />
        <div className="mt-4 flex justify-center">
          <div className="flex items-center mr-4">
            <div className="w-4 h-4 rounded-full bg-[#4CAF50] mr-2"></div>
            <span className="text-[#f2f2f2]">Buy</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 rounded-full bg-[#F44336] mr-2"></div>
            <span className="text-[#f2f2f2]">Sell</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}