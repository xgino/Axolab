import { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import SEOHead from '@/components/SEOHead';
import ProjectCard from '@/components/ProjectCard';
import Tag from '@/components/Tag';
import { projects } from '@/data/portfolio';

const projectTypes = ['All', 'Success', 'Free Tool', 'Failed', 'Ongoing'];
const techTags = ['React', 'Node.js', 'Python', 'PostgreSQL', 'Stripe', 'SaaS', 'Analytics', 'Marketing', 'SEO'];

export default function Portfolio() {
  const [selectedType, setSelectedType] = useState('All');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projects.filter(project => {
    const matchesType = selectedType === 'All' || project.type === selectedType;
    const matchesTags = selectedTags.length === 0 || 
      selectedTags.some(tag => project.tags.includes(tag));
    const matchesSearch = searchQuery === '' || 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesType && matchesTags && matchesSearch;
  });

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSelectedType('All');
    setSelectedTags([]);
    setSearchQuery('');
  };

  return (
    <>
      <SEOHead 
        title="Portfolio - AxoLab | SaaS Projects & Case Studies"
        description="Explore my complete portfolio of SaaS products, from successful $15K MRR projects to failed experiments with valuable lessons learned."
        keywords="SaaS portfolio, startup projects, case studies, indie hacker, software development, MRR growth"
      />
      
      <div className="min-h-screen pt-20">
        {/* Header Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                My SaaS Portfolio
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A complete collection of my SaaS projects, tools, and experiments. 
                From successful products generating $15K+ MRR to failed attempts with valuable lessons.
              </p>
            </motion.div>

            {/* Stats Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            >
              <Card className="border-card-border card-gradient">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-success mb-1">
                    {projects.filter(p => p.type === 'Success').length}
                  </div>
                  <div className="text-sm text-muted-foreground">Successful Products</div>
                </CardContent>
              </Card>
              
              <Card className="border-card-border card-gradient">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-1">
                    {projects.filter(p => p.type === 'Free Tool').length}
                  </div>
                  <div className="text-sm text-muted-foreground">Free Tools</div>
                </CardContent>
              </Card>
              
              <Card className="border-card-border card-gradient">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-warning mb-1">
                    {projects.filter(p => p.type === 'Ongoing').length}
                  </div>
                  <div className="text-sm text-muted-foreground">Ongoing Projects</div>
                </CardContent>
              </Card>
              
              <Card className="border-card-border card-gradient">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-destructive mb-1">
                    {projects.filter(p => p.type === 'Failed').length}
                  </div>
                  <div className="text-sm text-muted-foreground">Failed Experiments</div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Search */}
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Type Filters */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Filter className="h-4 w-4" />
                  <span>Filter by type:</span>
                </div>
                {projectTypes.map((type) => (
                  <Tag
                    key={type}
                    interactive
                    variant={selectedType === type ? 'default' : 'outline'}
                    onClick={() => setSelectedType(type)}
                  >
                    {type}
                  </Tag>
                ))}
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="text-sm text-muted-foreground">
                  Filter by tech:
                </div>
                {techTags.map((tag) => (
                  <Tag
                    key={tag}
                    interactive
                    variant={selectedTags.includes(tag) ? 'secondary' : 'outline'}
                    size="sm"
                    onClick={() => toggleTag(tag)}
                  >
                    {tag}
                  </Tag>
                ))}
              </div>

              {/* Clear Filters */}
              {(selectedType !== 'All' || selectedTags.length > 0 || searchQuery) && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="text-muted-foreground hover:text-foreground"
                >
                  Clear all filters
                </Button>
              )}
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {filteredProjects.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  No projects found
                </h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your filters or search query
                </p>
                <Button onClick={clearFilters} variant="outline">
                  Clear filters
                </Button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
              >
                {filteredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                  />
                ))}
              </motion.div>
            )}

            {/* Results Count */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mt-12 text-muted-foreground"
            >
              Showing {filteredProjects.length} of {projects.length} projects
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}