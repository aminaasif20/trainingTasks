import React from "react";
import pic1 from "../../assets/asset/19f6c.jpg";
import pic2 from "../../assets/asset/119ec4.jpg";
import pic3 from "../../assets/asset/144c28.jpg";
import pic4 from "../../assets/asset/20b9f7.jpg";
import pic5 from "../../assets/asset/21de5.jpg";
import pic6 from "../../assets/asset/246371.jpg";
import pic7 from "../../assets/asset/256356.jpg";
import pic8 from "../../assets/asset/3fa0a.jpg";
import pic9 from "../../assets/asset/4d73f.jpg";
import pic10 from "../../assets/asset/54003.jpg";
import pic11 from "../../assets/asset/61c29.jpg";
import pic12 from "../../assets/asset/7a1a6.jpg";
import pic13 from "../../assets/asset/g16dec.jpg";
import pic14 from "../../assets/asset/g296cc.jpg";
import pic15 from "../../assets/asset/g34274.jpg";
import groupImage from "../../assets/asset/teamCropedBg.png";

const teamMembers = [
  {
    id: 1,
    name: "Hamza Shafiq",
    role: "Full Stack Engineer",
    image: pic1,
    bio: "Meet Hamza Shafiq, Speectos composed Software Engineer. Graduating from Punjab University in 2021, he is been with Speecto for a year, appreciating its relaxed environment. A sports lover, Hamza also aspires to solve real-world problems with his own product in the future.",
  },
  {
    id: 2,
    name: "Muhammad Ahmad",
    role: "Full Stack Engineer",
    image: pic2,
    bio: "Introducing Muhammad Ahmed - a compelling personality and a front-end engineer by profession. Ahmed, a 2021 NCBA graduate, joined Speecto appreciating its supportive atmosphere and growth opportunities. A budding book enthusiast and Ted Talks producer, he also enjoys mentoring juniors.",
  },
  {
    id: 3,
    name: "Muhammad Umar",
    role: "Full Stack Engineer",
    image: pic3,
    bio: "Introducing Muhammad Umar - a consistent high-achiever and our esteemed React Native Developer. A GK University graduate, Umar joined Speecto a year ago, and despite his accomplishments, hes ever-humble and committed to learning. With two years of experience pre-graduation, Umar is fond of reading technical blogs and is passionate about technology.",
  },
  {
    id: 4,
    name: "Muhammad Usmn",
    role: "UI UX Designer",
    image: pic4,
    bio: "Introducing Muhammad Usman, our quick-witted UI/UX Designer at Speecto. An alumnus of the University of Faisalabad, Usman not only brings insightful knowledge to the team, but also a unique interest in Holy Quran reading and F1 racing.",
  },
  {
    id: 5,
    name: "Uzair Butt",
    role: "Graphic Designer",
    image: pic5,
    bio: "Introducing Uzair Butt - a versatile Graphic Designer, handling more than his expertise dictates at Speecto. A 2019 NCA graduate, Uzair joined Speecto after gaining two years of experience in the field. He has an impressive track record of completing diverse tasks flawlessly, even maintaining a record of zero days off.",
  },
  {
    id: 6,
    name: "Umair Akbar",
    role: "Senior Frontend Engineer",
    image: pic6,
    bio: "Introducing Umair - a dynamic Software Engineer who is been contributing significantly to Speecto for 2 years. Despite being an extrovert, he is a man of few words but abundant action. An alumnus of Riphah International University, Umair is not only kind and humorous but also hardworking and strategic.",
  },
  {
    id: 7,
    name: "Uzair Aslam",
    role: "UI UX Designerr",
    image: pic7,
    bio: "Meet Uzair Aslam - a testament to the friendly atmosphere at Speecto. Uzair, a 2021 graduate from the Agriculture University of Faisalabad, joined Speecto nine months ago and has since proved his mettle as an exceptional UI/UX designer.",
  },
  {
    id: 8,
    name: "Asad Ijaz",
    role: "Frontend Engineer",
    image: pic8,
    bio: "Introducing Asad Ijaz, our skilled Junior Front-End Engineer at Speecto and a champion at Counter-Strike: Global Offensive. A graduate from the Agriculture University of Faisalabad, Asad is proficient in React.js. He appreciates the supportive team, frequent events, and flexible timings at Speecto.",
  },
  {
    id: 9,
    name: "Muhammad Saif",
    role: "Backend Developer",
    image: pic9,
    bio: "Introducing Muhammad Saif-ur-Rehman, an adept Junior Back End Developer with one year of professional experience, is a proud graduate of the University of Faisalabad. He currently brings his skills and values to his role at Speecto.",
  },
  {
    id: 10,
    name: "Mujtaba Asif",
    role: "Frontend Engineer",
    image: pic10,
    bio: "Mujtaba Asif, a compassionate individual and graduate from National Textile University, serves as a Mern-Stack developer at Speecto, leveraging his one-year professional experience in the field. He is known for his work-life balance, love for travel, and aspiration to excel in his coding career at Speecto.",
  },
  {
    id: 11,
    name: "Muhammad Jahanzaib",
    role: "SEO Analyst",
    image: pic11,
    bio: "Muhammad Jahanzaib, our new SEO Analyst at Speecto. Armed with a BS in Software Engineering from National Textile University and over three years of experience in the field, Jahanzaib brings a wealth of knowledge and expertise. His unique skills will no doubt contribute to enhancing our platforms visibility and reach.",
  },
  {
    id: 12,
    name: "Mohammad Hamza",
    role: "Graphic Designer",
    image: pic12,
    bio: "Introducing Mohammad Hamza Mohammad Ali, the newest member of our Speecto team. Holding a Bachelors degree in Commerce from the University of Karachi and an Advanced Diploma in Media Studies from Arena Multimedia, Pakistan, Hamza brings a unique blend of academic and IT expertise. With over 4 years of diverse industry experience, including notable stints at Shop Arena, Moazzam Khan Couture, Creatrix Multimedia, Technallize, and Premium Brand Digital Solution, he is all set to leave his mark at Speecto.",
  },
  {
    id: 13,
    name: "Ayesha",
    role: "Business Development Manager",
    image: pic13,
    bio: "Introducing Ayesha, our new Business Development Officer at Speecto. Armed with a BBA degree and over a year of professional experience, Ayesha is business acumen is set to be a great asset to our team. We are thrilled to have her on board and cant wait to see the growth she drives.",
  },
  {
    id: 14,
    name: "Nimra Maqsood",
    role: "Business Development Manager",
    image: pic14,
    bio: "We had like to welcome Nimra, another addition to our Business Development team. With an impressive academic background, holding both a BS and MPhil in Computer Science, and a year of industry experience, we are excited to see how her tech-savvy approach benefits our business strategies.",
  },
  {
    id: 15,
    name: "Noor Fatima",
    role: "Human Resource Executive",
    image: pic15,
    bio: "Meet Noor Fatima, our new Human Resources Manager. A BBA graduate with over a year of HR experience, Fatimas expertise in fostering positive work environments is set to be a valuable addition to our company culture. We are confident she will make a significant impact in strengthening our team.",
  },
];
const OurTeam = () => {
  return (
    <section className="bg-gray-50 ">
      <div className="w-auto mx-auto ">
        <div className="relative   h-[70vh]">
          <img
            className="w-full pt-18 bottom-0 absolute object-contain"
            src={groupImage}
            alt="Group photo background"
          />

          <div className="absolute inset-0 bg-black/60 flex flex-col items-center  text-center px-4">
            <h2 className="text-2xl mt-12 sm:text-4xl font-Montserrat text-white">
              MEET OUR <span className="text-blue-400">TEAM</span>
            </h2>
            <p className="mt-3 text-gray-100 font-Montserrat max-w-2xl">
              UNLEASHING THE POWER OF COLLABORATION TO CREATE EXTRAORDINARY
              RESULTS.
            </p>
          </div>
        </div>

        <style>
          {`
            .clip-expand {
              clip-path: polygon(0 75%, 100% 60%, 100% 100%, 0 100%);
              transition: clip-path 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            }
            .group:hover .clip-expand {
              clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            }
          `}
        </style>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {teamMembers.map((mem, indx) => (
            <div
              key={indx}
              className="relative group rounded-3xl overflow-hidden shadow-lg bg-[#f0f0f0] h-[330px] w-full"
            >
              {/* Image with grayscale transition */}
              <img
                className="w-full  h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                src={mem.image}
                alt={mem.name}
              />

              {/* Expanding Overlay container */}
              <div className="absolute inset-0 clip-expand z-10 pointer-events-none group-hover:pointer-events-auto">
                {/* Black Background (Unhovered) */}
                <div className="absolute inset-0 bg-[#161616] group-hover:opacity-0 transition-opacity duration-500"></div>

                {/* Blue Gradient Background (Hovered) */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a5eff]/90 to-[#00c6ff]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Unhovered Text (Fades out on hover) */}
                <div className="absolute bottom-0 left-0 right-0 h-[130px] flex flex-col items-center justify-end pb-5 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                  <h3 className="text-lg font-bold text-white tracking-wide">
                    {mem.name}
                  </h3>
                  <p className={`text-sm mt-1 font-medium bg-clip-text text-transparent ${
                    indx % 2 === 0
                      ? 'bg-gradient-to-r from-pink-500 to-rose-400'
                      : 'bg-gradient-to-r from-purple-500 to-fuchsia-400'
                  }`}>
                    {mem.role}
                  </p>
                </div>

                {/* Hovered Details Text (Fades in on hover) */}
                <div className="absolute inset-0 p-8 flex flex-col text-left text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <h3 className="text-2xl font-semibold mb-1 mt-2">
                    <span className="font-bold">{mem.name.split(" ")[0]}</span>{" "}
                    {mem.name.split(" ").slice(1).join(" ")}
                  </h3>
                  <p className="text-sm font-medium mb-4">{mem.role}</p>
                  {mem.bio && (
                    <p className="text-sm leading-relaxed text-blue-50">
                      {mem.bio}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
