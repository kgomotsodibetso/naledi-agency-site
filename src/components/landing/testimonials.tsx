'use client';
import { testimonialsData } from '@/lib/data';

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-slate-50 py-20">
      <div className="section-container text-center">
        <h2 className="section-title mb-2">What Our Clients Say</h2>
        <p className="section-subtitle mb-12">Real results, real praise.</p>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-left">
              <p className="text-slate-600 mb-6 font-body italic">"{testimonial.quote}"</p>
              <div className="font-bold text-midnight-blue">{testimonial.author}</div>
              <div className="text-sm text-golden-ochre">{testimonial.company}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
