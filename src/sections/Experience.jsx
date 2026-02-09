
const experiences =[
    {
        role : "Full Stack Developer (Fresher)",
        workon :"Self-Learning & Project Experience",
        Description: "Building full-stack web applications while learning modern technologies. Focused on clean UI, REST APIs, and real-world problem solving through hands-on projects.",
        technologies :["React", "Java", "Spring Boot",  "REST APIs", " Git"],
        current: true,
    },
    {
        role : "Frontend Developer (Practice Projects)",
        workon :"Personal Projects",
        Description: "Developed responsive user interfaces and interactive components using React and modern CSS. Improved component reusability and UI performance through best practices.",
        technologies :["HTML" , "CSS" , "JavaScript (ES6+)" , "React" , "Tailwind CSS"],
        current: false,
    },
    {
        role : "Programming Foundations",
        workon :"Learning Phase",
        Description: "Learned core programming concepts, data structures basics, and object-oriented programming while building small practice projects.",
        technologies :["Java" , "OOP" , "Basics of DSA" , "GitHub"],
        current: false,
    },
]

export const Experience =() =>{
    return (
    <section id="experience" className="py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"/>
        <div className="container mx-auto px-6 relative z-10">
            {/* section header */}
            <div className="max-w-3xl mb-16 ">
                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                    Career Journey
                    </span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                    Experience that <span className="italic font-serif text-white font-normal">speaks volumes</span>
                </h2>
                <p className="text-muted-foreground animate-fade-in animation-delay-200">
                    A timeline highlighting my learning experience, projects, and progress as a full-stack developer.
                </p>
            </div>

            {/* timeline */}
            <div className="relative"> 
                <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]"/>
                
                {/* experiences */}
                <div className="space-y-12">
                    {experiences.map((exp,idx) => (
                        <div key={idx} 
                        className="realtive grid md:grid-cols-2 gap-8 animate-fade-in "
                        style={{animationDelay : `${(idx + 1) * 100 }ms`}}>
                            {/* timeline dot */}
                            <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                                {exp.current && <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"/>}
                            </div>

                            {/* content */}
                            <div className={`pl-8 md:pl-0 ${idx % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}>
                                <div className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500 `}>
                                    <h3 className="text-xl font-semibold mt-2 text-primary">{exp.role}</h3>
                                    <p className="text-muted-foreground">{exp.workon}</p>
                                    <p className="text-muted-foreground text-sm mt-4">{exp.Description}</p>
                                    <div className={`flex flex-wrap gap-2 mt-4 ${idx % 2 === 0 ? "md:justify-end" : ""}`}>
                                        {exp.technologies.map((tech, techidx) => (
                                            <span key={techidx} className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    </section>
    )
}