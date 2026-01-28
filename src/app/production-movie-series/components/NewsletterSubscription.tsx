'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import { formService } from '@/lib/services/formService';

const NewsletterSubscription = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      await formService.subscribeNewsletter({ email });
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    } catch (error: any) {
      setErrorMessage(error?.message || 'Failed to subscribe. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isHydrated) {
    return (
      <div className="bg-primary/10 rounded-lg p-6 border border-primary/20">
        <div className="h-32 animate-pulse bg-muted/50 rounded"></div>
      </div>
    );
  }

  return (
    <div className="bg-primary/10 rounded-lg p-6 border border-primary/20">
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
          <Icon name="BellAlertIcon" size={24} variant="solid" className="text-white" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-headline text-text-primary mb-2">Get Notified of New Episodes</h3>
          <p className="text-sm text-text-secondary mb-4">
            Subscribe to receive notifications when we release new production transparency episodes.
          </p>
          {isSubscribed ? (
            <div className="flex items-center space-x-2 text-success">
              <Icon name="CheckCircleIcon" size={20} variant="solid" />
              <span className="text-sm font-body">Successfully subscribed!</span>
            </div>
          ) : (
            <>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  disabled={isSubmitting}
                  className="flex-1 px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2 bg-primary text-primary-foreground font-cta text-sm rounded-md hover:bg-primary/90 transition-colors duration-300 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <Icon name="ArrowPathIcon" size={16} className="animate-spin" />
                      <span>Subscribing...</span>
                    </>
                  ) : (
                    <span>Subscribe</span>
                  )}
                </button>
              </form>
              {errorMessage && (
                <p className="text-xs text-destructive mt-2">{errorMessage}</p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsletterSubscription;