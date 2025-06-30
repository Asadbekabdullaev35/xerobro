import React from 'react';
import { useTranslation } from 'react-i18next';
import { BookOpen, Clock, DollarSign, Award, GraduationCap, Certificate, Users, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PageHeader from './PageHeader';

const Courses = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const courseLevels = [
    {
      level: 'A1–A2',
      title: 'Beginner Fundamentals',
      duration: '40 hours',
      price: '$299',
      skills: [
        'Basic vocabulary and phrases',
        'Simple sentence construction',
        'Present tense mastery',
        'Everyday conversation skills'
      ],
      description: 'Perfect for complete beginners starting their German journey'
    },
    {
      level: 'B1–B2',
      title: 'Intermediate Fluency',
      duration: '60 hours',
      price: '$399',
      skills: [
        'Complex grammar structures',
        'Past and future tenses',
        'Business German basics',
        'Reading comprehension'
      ],
      description: 'Build confidence for daily communication and work environments'
    },
    {
      level: 'C1',
      title: 'Advanced Mastery',
      duration: '80 hours',
      price: '$499',
      skills: [
        'Academic German proficiency',
        'Advanced writing skills',
        'Literature comprehension',
        'Professional presentations'
      ],
      description: 'University-level German for academic success'
    },
    {
      level: 'C-Test Prep',
      title: 'Studienkolleg Entrance',
      duration: '20 hours',
      price: '$199',
      skills: [
        'C-Test format mastery',
        'Speed reading techniques',
        'Grammar gap-filling',
        'Exam strategies'
      ],
      description: 'Specialized preparation for Studienkolleg admission'
    }
  ];

  const instructors = [
    {
      name: 'Dr. Anna Müller',
      photo: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      certification: 'C2 Certified',
      bio: 'Native German speaker with PhD in Linguistics. 5+ years teaching international students for university preparation.',
      credentials: ['University Degree', 'Teaching Certificate', 'C2 Certification']
    },
    {
      name: 'Prof. Michael Weber',
      photo: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      certification: 'TestDaF Examiner',
      bio: 'Former Studienkolleg instructor with 8+ years experience. Specialized in C-Test and academic German preparation.',
      credentials: ['TestDaF Examiner', 'Studienkolleg Experience', 'Academic German']
    },
    {
      name: 'Sarah Hoffmann',
      photo: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      certification: 'Goethe Institute',
      bio: 'Completed Studienkolleg and German university admission. 4+ years helping students achieve their German dreams.',
      credentials: ['Goethe Certified', 'Student Success', 'Cultural Integration']
    },
    {
      name: 'Thomas Schmidt',
      photo: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      certification: 'Business German',
      bio: 'Business German specialist with corporate training experience. Expert in professional communication and workplace German.',
      credentials: ['Business German', 'Corporate Training', 'Professional Communication']
    }
  ];

  const handleEnrollClick = () => {
    navigate('/contact?service=language-courses');
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <PageHeader title="German Language Courses" />
      
      <div className="pt-32 pb-24 relative">
        <div className="matrix-bg opacity-20" />
        <div className="grid-animation absolute inset-0 opacity-30" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-mono">German Language Courses</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Master German from A1 to C1 with expert instruction and personalized coaching. 
              Prepare for university admission and Studienkolleg entrance exams.
            </p>
          </div>

          {/* Course Levels Section */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-mono">Choose Your Level</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                From complete beginner to university-ready proficiency
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {courseLevels.map((course, index) => (
                <div 
                  key={index}
                  className="group relative h-full"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-white/20 via-white/10 to-transparent rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  
                  <div className="relative h-full p-6 bg-black border border-white/10 rounded-lg transition-all duration-500 hover:bg-white/5 hover:border-white/30 hover:scale-[1.02] flex flex-col">
                    {/* Level Badge */}
                    <div className="inline-block bg-white/10 text-white px-3 py-1 rounded-full text-sm font-bold mb-4 self-start">
                      {course.level}
                    </div>

                    {/* Course Title */}
                    <h3 className="text-xl font-bold text-white mb-3">{course.title}</h3>
                    
                    {/* Description */}
                    <p className="text-gray-400 text-sm mb-4">{course.description}</p>

                    {/* Skills List */}
                    <div className="flex-1 mb-6">
                      <h4 className="text-white font-semibold mb-3">Key Skills:</h4>
                      <ul className="space-y-2">
                        {course.skills.map((skill, skillIndex) => (
                          <li key={skillIndex} className="flex items-start text-sm text-gray-400">
                            <div className="h-1.5 w-1.5 rounded-full bg-white/50 mr-3 mt-2 flex-shrink-0" />
                            <span>{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Course Details */}
                    <div className="space-y-3 border-t border-white/10 pt-4">
                      <div className="flex items-center text-gray-400">
                        <Clock className="h-4 w-4 mr-2" />
                        <span className="text-sm">{course.duration}</span>
                      </div>
                      <div className="flex items-center text-white font-bold">
                        <DollarSign className="h-4 w-4 mr-2" />
                        <span className="text-lg">{course.price}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Summary Section */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-mono">Pricing Summary</h2>
              <p className="text-xl text-gray-400">Transparent pricing with bundle savings</p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  {courseLevels.map((course, index) => (
                    <div key={index} className="text-center p-4 bg-white/5 rounded-lg">
                      <h3 className="font-bold text-white mb-2">{course.level}</h3>
                      <p className="text-2xl font-bold text-white">{course.price}</p>
                      <p className="text-sm text-gray-400">{course.duration}</p>
                    </div>
                  ))}
                </div>

                {/* Bundle Offer */}
                <div className="border-t border-white/20 pt-8">
                  <div className="text-center p-6 bg-gradient-to-r from-white/10 to-white/5 rounded-lg border border-white/20">
                    <h3 className="text-2xl font-bold text-white mb-2">Bundle & Save</h3>
                    <p className="text-gray-400 mb-4">Enroll in all four levels and save 10%</p>
                    <div className="flex items-center justify-center space-x-4">
                      <span className="text-lg text-gray-400 line-through">$1,396</span>
                      <span className="text-3xl font-bold text-white">$1,299</span>
                      <span className="bg-green-500 text-black px-3 py-1 rounded-full text-sm font-bold">Save $97</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Teacher Qualifications Section */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-mono">Meet Your Instructors</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Learn from certified native speakers and experienced educators
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {instructors.map((instructor, index) => (
                <div 
                  key={index}
                  className="group text-center"
                >
                  <div className="relative mb-6">
                    <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-white/10 rounded-full blur opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    <img 
                      src={instructor.photo}
                      alt={instructor.name}
                      className="relative w-32 h-32 rounded-full object-cover mx-auto border-2 border-white/20 group-hover:border-white/50 transition-all"
                    />
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <span className="bg-white text-black px-3 py-1 rounded-full text-xs font-bold">
                        {instructor.certification}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{instructor.name}</h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{instructor.bio}</p>

                  {/* Credentials */}
                  <div className="flex flex-wrap justify-center gap-2">
                    {instructor.credentials.map((credential, credIndex) => (
                      <div key={credIndex} className="flex items-center bg-white/10 rounded-full px-3 py-1">
                        {credIndex === 0 && <GraduationCap className="h-3 w-3 mr-1" />}
                        {credIndex === 1 && <Certificate className="h-3 w-3 mr-1" />}
                        {credIndex === 2 && <Award className="h-3 w-3 mr-1" />}
                        <span className="text-xs text-gray-300">{credential}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action Section */}
          <section>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-white/20 via-white/10 to-transparent rounded-3xl blur-xl opacity-50" />
              
              <div className="relative bg-gradient-to-br from-white/10 to-transparent border border-white/20 rounded-2xl p-12 text-center">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 font-mono">
                    Ready to Level Up Your German?
                  </h2>
                  <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                    Join thousands of successful students who achieved their German university dreams. 
                    Start with a free assessment to find your perfect course level.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button 
                      onClick={handleEnrollClick}
                      className="group bg-white text-black px-8 py-4 rounded-lg font-mono hover:bg-gray-100 transition-all flex items-center justify-center border border-white/50 glow-md hover-glow"
                    >
                      <Users className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                      Enroll Now
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                    
                    <button 
                      onClick={() => navigate('/contact')}
                      className="group bg-transparent text-white px-8 py-4 rounded-lg font-mono border-2 border-white/50 hover:bg-white/10 hover:border-white transition-all flex items-center justify-center"
                    >
                      <BookOpen className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                      Free Assessment
                    </button>
                  </div>

                  {/* Trust Indicators */}
                  <div className="mt-8 pt-8 border-t border-white/20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                      <div>
                        <div className="text-2xl font-bold text-white">1000+</div>
                        <div className="text-gray-400 text-sm">Students Taught</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white">98%</div>
                        <div className="text-gray-400 text-sm">Success Rate</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white">50+</div>
                        <div className="text-gray-400 text-sm">Universities</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Courses;