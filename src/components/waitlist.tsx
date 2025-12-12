'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Check, Copy, Share2, Sparkles } from 'lucide-react'
import confetti from 'canvas-confetti'
import { Button } from '@/components/ui/button'

export function Waitlist() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [position, setPosition] = useState<number | null>(null)
  const [referralCode, setReferralCode] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)
  const [total, setTotal] = useState<number | null>(null)
  const [referredBy, setReferredBy] = useState<string | null>(null)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const ref = params.get('ref')
    if (ref) {
      setReferredBy(ref)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, referredBy })
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setPosition(data.position)
        setReferralCode(data.referralCode)
        setTotal(data.total)
        
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        })
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }


  const copyReferralLink = () => {
    const link = `${window.location.origin}?ref=${referralCode}`
    navigator.clipboard.writeText(link)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const shareReferralLink = async () => {
    const link = `${window.location.origin}?ref=${referralCode}`
    if (navigator.share) {
      await navigator.share({
        title: 'Join Selensie Waitlist',
        text: 'Join me on the Selensie waitlist for privacy-first computing!',
        url: link
      })
    } else {
      copyReferralLink()
    }
  }

  return (
    <section id="waitlist" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black" />
      
      <div className="relative z-10 container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 border border-white/10">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-gray-300">Early Access</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Join the{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Revolution
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Be among the first to experience true digital sovereignty. 
            Get exclusive early access and updates.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {status === 'success' && position && referralCode ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="glass rounded-3xl p-8 md:p-12 border border-white/10"
            >
              <div className="text-center mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring' }}
                  className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <Check className="w-10 h-10 text-green-400" />
                </motion.div>
                
                <h3 className="text-3xl font-bold mb-2">You're on the list!</h3>
                <p className="text-gray-400">Check your email for confirmation</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white/5 rounded-2xl p-6 text-center">
                  <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                    #{position}
                  </div>
                  <div className="text-sm text-gray-400">Your Position</div>
                </div>
                
                <div className="bg-white/5 rounded-2xl p-6 text-center">
                  <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
                    {total}
                  </div>
                  <div className="text-sm text-gray-400">Total Signups</div>
                </div>
              </div>

              <div className="bg-white/5 rounded-2xl p-6">
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <Share2 className="w-5 h-5 text-purple-400" />
                  Move up the list
                </h4>
                <p className="text-sm text-gray-400 mb-4">
                  Share your unique referral link. For every person who joins, you both move up!
                </p>
                
                <div className="flex gap-2">
                  <div className="flex-1 bg-black/50 rounded-xl px-4 py-3 font-mono text-sm truncate">
                    {window.location.origin}?ref={referralCode}
                  </div>
                  
                  <Button
                    onClick={copyReferralLink}
                    variant="outline"
                    size="icon"
                  >
                    {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                  </Button>
                  
                  <Button
                    onClick={shareReferralLink}
                    variant="gradient"
                  >
                    <Share2 className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              onSubmit={handleSubmit}
              className="glass rounded-3xl p-8 md:p-12 border border-white/10"
            >
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    disabled={status === 'loading'}
                    className="w-full pl-12 pr-4 py-4 bg-black/50 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-500 disabled:opacity-50"
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={status === 'loading'}
                  variant="gradient"
                  size="lg"
                >
                  {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
                </Button>
              </div>
              
              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-400 text-sm mt-4"
                >
                  Something went wrong. Please try again.
                </motion.p>
              )}
              
              <p className="text-xs text-gray-500 mt-4 text-center">
                We respect your privacy. No spam, ever. Unsubscribe anytime.
              </p>
            </motion.form>
          )}
        </AnimatePresence>

        {status !== 'success' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-500"
          >
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" />
              <span>Early access pricing</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" />
              <span>Exclusive updates</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" />
              <span>Beta testing opportunities</span>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}