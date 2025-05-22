import BlogPanel from '@/components/blog/BlogPanel';
import './HomePage.css';
import JobSnippet from '@/components/jobs/JobSnippet';
import jobs from '@/components/jobs/Jobs';

export default function HomePage() {
  return (
      <div className="flex flex-col gap-10 items-start">
        <div className="flex flex-col md:flex-row justify-between gap-20 mt-5">

          <div className="flex flex-col gap-3 ml-20 shrink-0 md:sticky md:top-5 md:self-start">
            <h1 className="text-emerald-800">Jacob Stafford</h1>
            <h3 className=''>Full Stack Web & Cloud Engineer</h3>
            <p className='mt-[0px] ml-4 max-w-[300px]'> <i>I build user facing web applications, and keep them running in the cloud.</i></p>

            <div id="navigation" className="flex flex-col mt-10 gap-0">
              <a className="hover:font-semibold cursor-pointer flex items-center space-x-2" href="#about">
                  <span className="dash"></span>
                  <span>About</span>
              </a>
              <a className="hover:font-semibold cursor-pointer flex items-center space-x-2" href="#experience">
                  <span className="dash"></span>
                  <span>Experience</span>
              </a>
              <a className="hover:font-semibold cursor-pointer flex items-center space-x-2" href="#blogs">
                  <span className="dash"></span>
                  <span>Blogs</span>
              </a>
            </div>

          </div>

          <div className='flex flex-col gap-10'>
            <section id="about" className="flex flex-col max-w-[600px] mr-10">
              <p>
                I'm a handiman of the software world. From building functional features, to intricate security measures, to serverless hosting on the cloud, to simply making it beautiful, I've crafted applications from ideas to scaled production reality. 
                The cross-section of pragmatism and creativity is where I'm happy.
              </p>
              <p>
                I have built systems across the stack, from DevOps (devboxes) to databases (furniture modeling schemas) to frontends (contact form).
                I've worked predominately in <b className='text-emerald-800'>eCommerce</b>, from B2B applications, to B2C high volume frontends, to internal tools and platforming. 
                I've developed in a variety of languages, of recent note, TypeScript, a love that JavaScript could never amount to.
                When it comes to cloud platforms I have touched the holy triade of the tech oligarchs, AWS, Azure, and GCP. Particularly <b className="text-emerald-800">AWS</b>.
              </p>
              <p>
                I branched out of the Web and Cloud realm into founding my game studio (Chronicler). It was a ride, I personally wrote over 10k C# lines. Claude, Copilot, ChatGPT struggle to write Godot code, due to the lack of public codebases, so I wrote old-fashioned OOP modular code with my ten bloody fingers. Game dev's have some serious grit, it's not all fun and games.
                I can happily say, I pushed this journey forward while it made sense, and the process has given me enormous gratisfaction. I'm equipped with a new perspective, and I can apply that to my future endeavors. 
              </p>
            </section>

            <section id="experience" className="flex flex-col max-w-[600px] mr-10 gap-8">
              {jobs.map((job, i) => (<JobSnippet key={i} {...job} />))}
            </section>


          </div>
        </div>
              <section id="blogs" className=''>
              <BlogPanel />
            </section>

      </div>
  );
}