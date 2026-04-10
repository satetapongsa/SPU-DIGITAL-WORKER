import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  Cpu, 
  Globe, 
  ShieldCheck, 
  Code2, 
  Layers, 
  Users, 
  Mail, 
  MapPin, 
  Phone,
  ArrowRight,
  ExternalLink,
  Terminal,
  Zap,
  Globe2,
  Database,
  Wifi,
  BrainCircuit,
  Rocket
} from 'lucide-react';
import { motion } from 'framer-motion';

const SPU_COLORS = {
  blue: '#005696',
  pink: '#E6007E',
  gold: '#FFD700'
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="container nav-content">
        <div className="logo" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/8/8c/New_logo_spu_%28Converted%29.png" alt="SPU" style={{ height: '40px' }} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '1.2rem', fontWeight: '800', lineHeight: '1' }}>SPU<span style={{ color: SPU_COLORS.pink }}> IT</span></span>
            <span style={{ fontSize: '0.6rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Computer Engineering</span>
          </div>
        </div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#roadmap">Curriculum</a>
          <a href="#industry">Industry</a>
          <a href="#admissions">Admissions</a>
        </div>
        <a href="https://www.spu.ac.th/fac/informatics/programs/computer-engineering/" className="btn btn-primary" style={{ background: SPU_COLORS.blue }} target="_blank">
          View Details <ExternalLink size={14} />
        </a>
      </div>
    </nav>
  );
};

const ProgramCard = ({ icon: Icon, title, description, highlights }) => (
  <motion.div 
    className="glass-card"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="icon-box">
      <Icon size={24} />
    </div>
    <h3>{title}</h3>
    <p style={{ color: 'var(--text-muted)', margin: '1rem 0' }}>{description}</p>
    <ul style={{ listStyle: 'none', margin: '1.5rem 0' }}>
      {highlights.map((item, i) => (
        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
          <ChevronRight size={14} className="text-primary" />
          {item}
        </li>
      ))}
    </ul>
    <button className="btn btn-glass" style={{ width: '100%', justifyContent: 'center' }}>
      Learn More <ArrowRight size={16} />
    </button>
  </motion.div>
);

const App = () => {
  return (
    <div id="home">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="badge" style={{ borderColor: SPU_COLORS.pink, color: SPU_COLORS.pink }}>AIoT EXPERIENCE #1 @SPU</span>
            <h1>Computer Engineering <br /><span className="gradient-text">SPU DIGITAL WORKER</span></h1>
            <p>Learning by doing with real-world AIoT projects. <br /> Master Smart Systems, Hardware, and Software for Industry 4.0.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <a href="#roadmap" className="btn btn-primary" style={{ background: `linear-gradient(135deg, ${SPU_COLORS.blue}, ${SPU_COLORS.pink})` }}>
                Explore Roadmap <ArrowRight size={18} />
              </a>
              <a href="https://www.spu.ac.th/scholarship2569/" className="btn btn-glass" target="_blank">
                Study Plan 2026
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="roadmap">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="badge">Official Curriculum</span>
            <h2>4-Year SPU Roadmap</h2>
          </div>
          <div className="grid-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            <ProgramCard 
              icon={Code2}
              title="Year 1: Fundamental AIoT"
              description="ปูพื้นฐานการเขียนโปรแกรม การใช้งานเครื่องมือเบื้องต้น การพัฒนาแอปพลิเคชันขนาดเล็ก และการทำต้นแบบ (Prototype) เพื่อเข้าใจกระบวนการทำงานของ IoT"
              highlights={['IoT Technician', 'Junior Programmer', 'Rapid Prototyping']}
            />
            <ProgramCard 
              icon={Cpu}
              title="Year 2: HW & SW Developer"
              description="เน้นการพัฒนาซอฟต์แวร์ควบคู่ไปกับระบบฝังตัว (Embedded Systems) ฝึกการออกแบบวงจร การเชื่อมต่อฮาร์ดแวร์กับซอฟต์แวร์ การทดสอบและแก้ไขปัญหา"
              highlights={['Embedded Systems', 'Circuit Design', 'Hardware-Software Integration']}
            />
            <ProgramCard 
              icon={Database}
              title="Year 3: IoT Solution Design"
              description="การออกแบบโซลูชัน IoT ในภาพรวม การวิเคราะห์ข้อมูลขนาดใหญ่ (Big Data) การสร้างแพลตฟอร์ม IoT และการวางแผนบริหารจัดการเครือข่าย"
              highlights={['IoT Platform Design', 'Big Data Analysis', 'Network Management']}
            />
          </div>
          <div style={{ marginTop: '2rem', maxWidth: '400px', margin: '2rem auto 0' }}>
            <ProgramCard 
              icon={BrainCircuit}
              title="Year 4: AIoT Developer"
              description="ต่อยอดสู่การพัฒนาโซลูชันที่ผสาน AI กับ IoT ในภาคอุตสาหกรรม ฝึกสร้างและปรับใช้ซอฟต์แวร์สำหรับงานอุตสาหกรรม (IIoT) และทำโครงการจบการศึกษา"
              highlights={['AIoT Specialist', 'Industrial IoT (IIoT)', 'Senior Project']}
            />
          </div>
        </div>
      </section>

      {/* Stats/Features Section */}
      <section id="industry" style={{ background: 'hsla(230, 45%, 8%, 0.5)' }}>
        <div className="container">
          <div className="grid-3" style={{ textAlign: 'center' }}>
            <div>
              <Rocket className="gradient-text" style={{ marginBottom: '1rem' }} />
              <h2 style={{ fontSize: '2.5rem' }}>AIoT #1</h2>
              <p style={{ color: 'var(--text-muted)' }}>The most advanced AIoT learning experience</p>
            </div>
            <div>
              <Users className="gradient-text" style={{ marginBottom: '1rem' }} />
              <h2 style={{ fontSize: '2.5rem' }}>100%</h2>
              <p style={{ color: 'var(--text-muted)' }}>Learning with real-world industry projects</p>
            </div>
            <div>
              <Globe2 className="gradient-text" style={{ marginBottom: '1rem' }} />
              <h2 style={{ fontSize: '2.5rem' }}>Career-Ready</h2>
              <p style={{ color: 'var(--text-muted)' }}>Strong career paths in the digital era</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Labs Section */}
      <section id="research">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="badge">Innovation Labs</span>
              <h2>Next-Gen Research Centers</h2>
              <p style={{ color: 'var(--text-muted)', margin: '1.5rem 0' }}>
                Our faculty hosts state-of-the-art facilities including the AI Innovation Lab and the Cyber Range Lab. Students work on real-world projects with companies like Google, AWS, and Microsoft.
              </p>
              <div style={{ display: 'grid', gap: '1rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div className="icon-box" style={{ width: '3rem', height: '3rem', margin: 0 }}>
                    <Layers size={20} />
                  </div>
                  <div>
                    <h4 style={{ margin: 0 }}>Edge Computing Lab</h4>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Optimizing IoT and mobile systems</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div className="icon-box" style={{ width: '3rem', height: '3rem', margin: 0 }}>
                    <Globe size={20} />
                  </div>
                  <div>
                    <h4 style={{ margin: 0 }}>Smart City Initiative</h4>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Building connected urban solutions</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
               className="glass-card" 
               style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderStyle: 'dashed' }}
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
              <div style={{ textAlign: 'center' }}>
                <Cpu size={64} className="text-primary" style={{ marginBottom: '1rem' }} />
                <h3>Virtual Tour Coming Soon</h3>
                <p style={{ color: 'var(--text-muted)' }}>Explore our labs in 3D</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="admissions" style={{ textAlign: 'center' }}>
        <div className="container">
          <div className="glass-card" style={{ background: 'linear-gradient(135deg, hsla(220, 95%, 60%, 0.1), hsla(180, 100%, 50%, 0.1))', padding: '4rem' }}>
            <h2>Ready to Start Your Journey?</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Applications for 2026 are now open. Limited scholarships available.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <button className="btn btn-primary">Submit Application</button>
              <button className="btn btn-glass">Download Brochure</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="logo" style={{ marginBottom: '1.5rem' }}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/8c/New_logo_spu_%28Converted%29.png" alt="SPU" style={{ height: '50px' }} />
              </div>
              <p style={{ color: 'var(--text-muted)' }}>Sripatum University <br />Faculty of Information Technology, Computer Engineering.</p>
            </div>
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#programs">Our Programs</a></li>
                <li><a href="#research">Research</a></li>
                <li><a href="#admissions">Admissions</a></li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Resources</h4>
              <ul>
                <li><a href="#">E-Learning</a></li>
                <li><a href="#">Student Portal</a></li>
                <li><a href="#">Internships</a></li>
                <li><a href="#">Faculty Directory</a></li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Contact</h4>
              <ul style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                <li style={{ display: 'flex', gap: '0.5rem' }}><MapPin size={16} /> Bangkok, Thailand</li>
                <li style={{ display: 'flex', gap: '0.5rem' }}><Phone size={16} /> +66 2 558 6888</li>
                <li style={{ display: 'flex', gap: '0.5rem' }}><Mail size={16} /> info@spu.ac.th</li>
              </ul>
            </div>
          </div>
          <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--surface-border)', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
            <p>© 2026 Sripatum University Faculty of Computer Engineering. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
