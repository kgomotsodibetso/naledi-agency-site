'use client';
import React, { useState, useMemo, useEffect } from 'react';
import { Footer } from '@/components/landing/footer';
import Image from 'next/image';
import { blogPostsData } from '@/lib/data';
import { FacebookIcon, LinkedInIcon, TwitterIcon } from '@/components/icons';


const ContentCardSkeleton = () => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="w-full h-56 bg-slate-200 animate-pulse"></div>
        <div className="p-6">
            <div className="h-4 w-1/3 bg-slate-200 rounded mb-3 animate-pulse"></div>
            <div className="h-8 w-1/2 bg-slate-200 rounded mb-4 animate-pulse"></div>
            <div className="h-4 w-full bg-slate-200 rounded animate-pulse"></div>
            <div className="h-4 w-5/6 bg-slate-200 rounded mt-1 animate-pulse"></div>
        </div>
    </div>
);


export default function BlogPage() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [sortOrder, setSortOrder] = useState('newest');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 800);
        return () => clearTimeout(timer);
    }, []);

    const categories = ['All', ...new Set(blogPostsData.map(post => post.category))];

    const displayedPosts = useMemo(() => {
        return blogPostsData
            .filter(post => selectedCategory === 'All' || post.category === selectedCategory)
            .sort((a, b) => {
                const dateA = new Date(a.date).getTime();
                const dateB = new Date(b.date).getTime();
                return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
            });
    }, [selectedCategory, sortOrder]);

    return (
      <>
        <main className="animate-fade-in-up bg-slate-50">
            <div className="section-container py-20">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-sans font-bold text-midnight-blue">Insights & Resources</h1>
                    <p className="font-handwriting text-golden-ochre text-4xl mt-2">Thoughts on brand building and digital growth.</p>
                </div>
                
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                    <div className="flex flex-wrap gap-2 justify-center">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-full font-semibold text-sm transition-colors duration-300 ${
                                    selectedCategory === category
                                        ? 'bg-midnight-blue text-white shadow'
                                        : 'bg-white text-slate-700 hover:bg-slate-200'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                    <div className="flex items-center gap-2">
                         <label htmlFor="sort-order" className="font-semibold text-slate-700 text-sm">Sort by:</label>
                         <select
                            id="sort-order"
                            value={sortOrder}
                            onChange={(e) => setSortOrder(e.target.value)}
                            className="px-4 py-2 border border-slate-300 rounded-md bg-white text-slate-900 focus:ring-sunrise-yellow focus:border-sunrise-yellow"
                         >
                             <option value="newest">Newest First</option>
                             <option value="oldest">Oldest First</option>
                         </select>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {isLoading ? (
                        Array.from({ length: blogPostsData.length }).map((_, index) => <ContentCardSkeleton key={index} />)
                    ) : (
                        displayedPosts.length > 0 ? displayedPosts.map((post, index) => {
                            const postUrl = typeof window !== 'undefined' ? window.location.href : '';
                            const encodedTitle = encodeURIComponent(`Check out this article from Naledi Digital: ${post.title}`);
                            const encodedUrl = encodeURIComponent(postUrl);

                            const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`;
                            const linkedInShareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`;
                            const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;

                            return (
                            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden group flex flex-col">
                                <div className="relative">
                                    <Image src={post.imageUrl} alt={post.title} width={800} height={600} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <p className="text-sm font-bold text-brand-teal">{post.category}</p>
                                    <h3 className="text-xl font-sans font-bold text-midnight-blue mt-1 mb-3 flex-grow">{post.title}</h3>
                                    <p className="text-slate-600 font-body mb-4">{post.excerpt}</p>
                                    <div className="mt-auto pt-4 border-t border-slate-200">
                                      <div className="flex justify-between items-center">
                                          <div className="text-sm text-slate-500">
                                              <span>{post.author}</span> &bull; <span>{post.date}</span>
                                          </div>
                                          <div className="flex items-center gap-2">
                                              <a href={twitterShareUrl} target="_blank" rel="noopener noreferrer" aria-label={`Share ${post.title} on Twitter`} className="text-slate-400 hover:text-slate-700 transition-colors">
                                                  <TwitterIcon className="h-5 w-5"/>
                                              </a>
                                              <a href={linkedInShareUrl} target="_blank" rel="noopener noreferrer" aria-label={`Share ${post.title} on LinkedIn`} className="text-slate-400 hover:text-slate-700 transition-colors">
                                                  <LinkedInIcon className="h-5 w-5"/>
                                              </a>
                                              <a href={facebookShareUrl} target="_blank" rel="noopener noreferrer" aria-label={`Share ${post.title} on Facebook`} className="text-slate-400 hover:text-slate-700 transition-colors">
                                                  <FacebookIcon className="h-5 w-5"/>
                                              </a>
                                          </div>
                                      </div>
                                    </div>
                                </div>
                            </div>
                            )
                        }) : (
                            <p className="col-span-full text-center text-slate-500 py-10">No posts found for this category.</p>
                        )
                    )}
                </div>
            </div>
        </main>
        <Footer />
      </>
    );
};
