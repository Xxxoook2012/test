import React from 'react';
import { Code, Database, Palette, Cloud, Globe, Smartphone, Target, Heart, TrendingUp, Bot } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Bot,
      title: 'الذكاء الاصطناعي و ChatGPT',
      color: 'from-emerald-500 to-teal-600',
      skills: ['ChatGPT Expert', 'Prompt Engineering', 'AI Integration', 'Machine Learning', 'Natural Language Processing', 'AI Automation']
    },
    {
      icon: Cloud,
      title: 'DevOps',
      color: 'from-purple-500 to-purple-600',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Nginx', 'Linux']
    },
    {
      icon: TrendingUp,
      title: 'التسويق',
      color: 'from-orange-500 to-orange-600',
      skills: ['تسويق رقمي', 'إدارة حملات', 'تحليل البيانات', 'SEO', 'تسويق المحتوى', 'تسويق أي حاجة']
    },
    {
      icon: Heart,
      title: 'الغلاسة على البنات',
      color: 'from-pink-500 to-rose-600',
      skills: ['كلام حلو', 'اهتمام زائد', 'رومانسية', 'دلع', 'مجاملات', 'قلب كبير']
    },
    {
      icon: Target,
      title: 'المكتنج',
      color: 'from-red-500 to-red-600',
      skills: ['استراتيجيات مبتكرة', 'حلول إبداعية', 'تفكير خارج الصندوق', 'إقناع', 'تطوير الأعمال', 'ريادة']
    },
    {
      icon: Globe,
      title: 'Other',
      color: 'from-cyan-500 to-cyan-600',
      skills: ['Git', 'Webpack', 'Jest', 'Cypress', 'Agile', 'Team Leadership']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            مجموعة شاملة من المهارات التقنية والشخصية المكتسبة من خلال سنوات من الخبرة والتعلم المستمر
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.title}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent size={24} className="text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{category.title}</h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;