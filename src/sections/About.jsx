
import { Code2, Rocket, Users, Lightbulb } from "lucide-react";
const highlights = [
     {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
]


export const About =() =>{
    return (
    <section id="about" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* lest side of about */}
                <div className="space-y-8 ">
                    <div className="animate-fade-in">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                    Building full-stack web applications
                    <span className="font-serif italic font-normal text-white"> with Java and React.</span>
                </h2>

                <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                    <p>
                        I’m a passionate Java Full Stack Developer (Fresher) who enjoys building clean, functional, and user-
                        focused web applications. I work with React, Java, and Spring Boot to create responsive frontends and 
                        scalable backend APIs while continuously strengthening my core fundamentals.
                    </p>
                    <p>
                        I’ve built hands-on projects using RESTful APIs, Spring Data JPA, Hibernate, and SQL, focusing on 
                        writing readable code and following best practices. I enjoy learning by building real-world features and 
                        improving my problem-solving skills with every project.
                    </p>
                    <p>
                        I’m actively seeking my first opportunity where I can learn from experienced developers, contribute to 
                        meaningful projects, and grow into a strong full-stack engineer.
                    </p>
                </div>
                <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                    <p className="text-lg font-medium italic text-foreground">
                        "My mission is to build reliable, user-friendly web applications while continuously learning and 
                        improving as a full-stack developer."
                    </p>
                </div>
            </div>
            {/* right side of about  */}
            <div className="grid sm:grid-cols-2 gap-6">
                {highlights.map((item, idx) => (
                    <div key={idx} 
                        className="glass p-6 rounded-2xl animate-fade-in"
                        style={{animationDelay : `${(idx + 1) * 100 }ms`}}>
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                            <item.icon className="w-6 h-6 text-primary"/>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                ))}
            </div>
            </div>
        </div>
    </section>
    );
};