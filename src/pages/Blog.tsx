import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import SEOHead from '@/components/SEOHead';
import Tag from '@/components/Tag';
import { blogPosts } from '@/data/portfolio';

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);
    
    return matchesSearch && matchesTag;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <>
      <SEOHead 
        title="Blog - AxoLab | SaaS Insights & Startup Lessons"
        description="Read about my journey building SaaS products, lessons from failures, pricing strategies, and practical guides for indie hackers."
        keywords="SaaS blog, startup lessons, indie hacker insights, pricing strategy, software development, entrepreneurship"
      />
      
      <div className="min-h-screen pt-20">
        {/* Header Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                SaaS Journey Blog
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Insights, lessons, and stories from building multiple SaaS products. 
                Learn from my successes, failures, and everything in between.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-border">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              {/* Search */}
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Tag Filters */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-sm text-muted-foreground">Filter by topic:</span>
                <Tag
                  interactive
                  variant={!selectedTag ? 'default' : 'outline'}
                  onClick={() => setSelectedTag(null)}
                >
                  All
                </Tag>
                {allTags.map((tag) => (
                  <Tag
                    key={tag}
                    interactive
                    variant={selectedTag === tag ? 'secondary' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedTag(tag)}
                  >
                    {tag}
                  </Tag>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && !searchQuery && !selectedTag && (
          <section className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-8"
              >
                <h2 className="text-2xl font-bold text-foreground mb-6">Featured Article</h2>
                
                <Card className="border-card-border card-gradient overflow-hidden hover:shadow-lg hover:glow transition-all duration-300">
                  <div className="md:flex">
                    <div className="md:w-1/3 h-48 md:h-auto hero-gradient opacity-20 flex items-center justify-center">
                      <div className="text-4xl text-primary/30 font-bold">
                        {featuredPost.title.split(' ').slice(0, 2).map(word => word[0]).join('')}
                      </div>
                    </div>
                    
                    <div className="md:w-2/3 p-8">
                      <div className="flex items-center space-x-2 mb-4">
                        <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                        <Badge variant="outline">{featuredPost.readTime} min read</Badge>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-foreground mb-3 hover:text-primary transition-colors duration-200">
                        <Link to={`/blog/${featuredPost.id}`}>
                          {featuredPost.title}
                        </Link>
                      </h3>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {featuredPost.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-subtle">
                          <Calendar className="h-4 w-4 mr-2" />
                          {new Date(featuredPost.publishedAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </div>
                        
                        <Link to={`/blog/${featuredPost.id}`}>
                          <Button variant="outline" size="sm" className="group">
                            <span>Read Article</span>
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {regularPosts.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="text-6xl mb-4">📝</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  No articles found
                </h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search or filter criteria
                </p>
                <Button 
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedTag(null);
                  }}
                  variant="outline"
                >
                  Clear filters
                </Button>
              </motion.div>
            ) : (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mb-8"
                >
                  <h2 className="text-2xl font-bold text-foreground">
                    {selectedTag ? `Articles about ${selectedTag}` : 'All Articles'}
                  </h2>
                </motion.div>

                <div className="space-y-8">
                  {regularPosts.map((post, index) => (
                    <motion.article
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    >
                      <Card className="border-card-border card-gradient hover:shadow-lg hover:glow transition-all duration-300">
                        <CardHeader>
                          <div className="flex items-center space-x-2 mb-2">
                            <Badge variant="outline">
                              <Clock className="h-3 w-3 mr-1" />
                              {post.readTime} min read
                            </Badge>
                            <div className="text-sm text-subtle">
                              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              })}
                            </div>
                          </div>
                          
                          <h3 className="text-xl font-bold text-foreground hover:text-primary transition-colors duration-200">
                            <Link to={`/blog/${post.id}`}>
                              {post.title}
                            </Link>
                          </h3>
                        </CardHeader>

                        <CardContent>
                          <p className="text-muted-foreground mb-4 leading-relaxed">
                            {post.description}
                          </p>

                          <div className="flex items-center justify-between">
                            <div className="flex flex-wrap gap-2">
                              {post.tags.map((tag) => (
                                <Tag
                                  key={tag}
                                  interactive
                                  variant="outline"
                                  size="sm"
                                  onClick={() => setSelectedTag(tag)}
                                >
                                  {tag}
                                </Tag>
                              ))}
                            </div>

                            <Link to={`/blog/${post.id}`}>
                              <Button variant="ghost" size="sm" className="group">
                                <span>Read more</span>
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                              </Button>
                            </Link>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.article>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      </div>
    </>
  );
}