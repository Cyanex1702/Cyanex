export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experiences", link: "#testimonials" },
  { name: "FAQ'S", link: "#faq" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Dedicated On Creating AI Technologies That Address Complex Challenges and Deliver Real-World Impact.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    //lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]
    imgClassName: "w-full h-auto object-contain absolute md:object-scale-down",
    titleClassName: "justify-end text-outline3",
    img: "adf6b60d-2389-47c5-bc24-5eb01d92d78b-Kittl.svg",
    spareImg: "",


  },
  {
    id: 2,
    title: "I'm very flexible with time-zone",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start custom-title-size",
    img: "",
    spareImg: "",
  },
  {

    id: 3,
    title: "Also my commitment to quality is unwavering",
    description: "I am a Consistent and Dedicated Individual",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 text-sm",
    descriptionColorClass: "text-yellow-500",
    imgClassName: "",
    titleClassName: "justify-center text-outline2 ",
    spareImg: "9f3be592-c4e5-491a-bf19-e4ca7f1a9ccc-Kittl.svg",
  },
  {
    id: 4,
    title: "Machine Learning Enthusiast Committed to Growth, Innovation, and Learning from the Best Minds in AI.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1 text-cyan-500",
    imgClassName: "",
    titleClassName: "justify-start text-outline ",
    img: "grid.svg",
    spareImg: "b4.svg",
  },

  {
    id: 5,
    title: "I Am Currently Seeking Opportunities To Advance My Career And Contribute To Innovative Projects",
    description: "The Inside Scoop",
    descriptionColorClass: "text-yellow-500",
    className: "md:col-span-3 md:row-span-2 text-pink-500",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60 rounded-3xl",
    //absolute bottom-5 right-5 w-[350px]  h-auto rounded-lg
    titleClassName: "justify-center md:justify-start lg:justify-center text-outline",
    img:  "4401f9ce-4353-4fa9-a687-81612f95c15a-Kittl.svg",
    spareImg: "grid.svg",
  },
  {
    id: 6,
    title: "Want to contact me? Well let's get in touch!",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center ",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Image Generation & Translation Model",
    des: "Developed an advanced image generation model named D.r.e.a.m, capable of producing high-quality images from text prompts for various applications.",
    img: "34904530-7bdd-45f0-a87b-77a2df6dcd26.jpg",
    iconLists: ["icons8-python.svg", "icons8-github.svg", "icons8-hugging-face.svg", "icons8-nvidia.svg", "icons8-pycharm.svg"],
    link: "https://huggingface.co/Cyanex/D.r.e.a.m_Mega",
  },
  {
    id: 2,
    title: "Virtual Try-On Clothing Generator",
    des: "It allows the users to visualize clothing items on Themselves. Using text to convey their clothing idea to create realistic clothing simulations. Implemented user-friendly features for seamless interaction and personalization.",
    img: "8ed6774b-e1d9-4681-a21e-320a87215be7.jpeg",
    iconLists: ["icons8-github.svg", "icons8-nvidia.svg", "icons8-hugging-face.svg", "icons8-streamlit.svg"],
    link: "https://github.com/Cyanex1702/Virtual_Try_on_FashionGenAi",
  },
  {
    id: 3,
    title: "Fit Bot: AI Personal Trainer Chatbot",
    des: "Created an interactive chatbot designed to function as a personal fitness trainer, providing users with customized workout plans, tracking progress, and offering fitness advice.",
    img: "7ad7225d-3f9a-4a16-a4d7-ac49953bbeda.jpeg",
    iconLists: ["icons8-python.svg", "icons8-tensorflow.svg", "icons8-nvidia.svg", "icons8-pytorch.svg", "icons8-chatgpt.svg"],
    link: "https://github.com/Cyanex1702/FitBot_Your-Personal-Trainer-Chatbot",
  },
  {
    id: 4,
    title: "RAG Using HuggingFace Embedding and OpenSource Models",
    des: "Retrieval-Augmented Generation (RAG) system leveraging Hugging Face embeddings for effective document retrieval and question answering. It utilizes ChromaDB as a vector database to store and query document embeddings. The project integrates a language model to generate answers based on retrieved data, ensuring contextually accurate responses. The implementation highlights RAG's ability to enhance knowledge-driven AI applications.",
    img: "96408f63-6478-4a19-b469-726d5db68952.jpeg",
    iconLists: ["icons8-python.svg", "icons8-github.svg", "icons8-nvidia.svg", "icons8-hugging-face.svg", "icons8-kaggle.svg"],
    link: "https://github.com/Cyanex1702/Retrieval-Augmented-Generation-RAG-Using-Hugging-Face-Embeddings",
  },
  {
    id: 5,
    title: "Image Scraping ToolKit",
    des: "Developed an efficient tool for scraping and collecting large datasets of images from the web, facilitating the creation of comprehensive datasets for AI and machine learning projects.",
    img: "c5f8ffa6-ebbf-429e-afae-c0aef84d71c4.jpeg",
    iconLists: ["icons8-python.svg", "icons8-github.svg", "icons8-nvidia.svg", "icons8-pytorch.svg", "icons8-tensorflow.svg"],
    link: "https://github.com/Cyanex1702/ImageSensei_ScrappingToolkit",
  },
  {
    id: 6,
    title: "Mid-journey Images/Prompts (Dataset)",
    des: "Created a diverse dataset containing images and their corresponding prompts, ideal for training and fine-tuning generative models and exploring prompt engineering techniques.",
    img: "1_j53S034PiCWbmX1eL-7wRA.png",
    iconLists: ["icons8-python.svg", "icons8-github.svg", "icons8-nvidia.svg", "icons8-kaggle.svg"],
    link: "https://www.kaggle.com/datasets/cyanex1702/midjouney-normalized-dataset",
  },
  {
    id: 7,
    title: "Marine Life (Dataset):",
    des: "Curated a dataset featuring images of diverse marine life, aimed at supporting research in marine biology, conservation, and AI-driven image classification",
    img: "1842e93a-5918-446b-b8f4-619a94c20985.jpeg",
    iconLists: ["icons8-python.svg", "icons8-github.svg", "icons8-nvidia.svg", "icons8-kaggle.svg"],
    link: "https://www.kaggle.com/datasets/cyanex1702/oceanic-life-dataset",
  },
  {
    id: 8,
    title: "Fine-tuned and Trained Personal AI Chatbot",
    des: "Personal AI Chatbot Using Large Language Models (LLMs), including the development and fine-tuning of a model named ADAM, enhancing its accuracy and efficiency for natural language processing tasks and enabling seamless interaction with users.",
    img: "68302571-4fcb-4cc0-9cfa-f6b3cf4263e1.jpeg",
    iconLists: ["icons8-python.svg", "icons8-github.svg", "icons8-nvidia.svg", "icons8-hugging-face.svg", "icons8-streamlit.svg"],
    link: "https://www.kaggle.com/code/cyanex1702/llm-models-finetuning-notebook",
  },
  {
    id: 9,
    title: "Indie Game Development",
    des: "Participated in the development of multiple indie games, including \"Nightfall Paradox.\" Contributed to game design, programming, and 3D modeling",
    img: "be49b425-afd9-4d83-a5d8-b62b91916a00.jpeg",
    iconLists: ["icons8-unreal-engine.svg", "icons8-blender.svg", "icons8-nvidia.svg", "icons8-c.svg"],
    link: "",
  },
];

export const testimonials = [
  {
    quote:
      "I’ve been a freelancer for 2 years, starting as a game designer and later transitioning into AI and ML. Initially, I created customized 3D models for UE4 games, achieving a 5-star rating and 95% client retention on Fiverr. As I shifted focus, I honed my skills in machine learning, deep learning, and data analysis, working on projects involving model training and data preprocessing. I’ve built a strong AI portfolio, blending my creative and technical expertise. This shift has fueled my passion for applying AI to solve real-world problems.",
    name: "Freelancer (Game Designer & AI Engineer)",
    title: "Jan 2022 - Present",
    profileImage: "icons8-fiverr.svg",
  },
  {
    quote:
      "I worked as an ML Intern for 3 months at GlobSkills, where I enhanced my Python skills and expanded my knowledge in areas like Data Structures, Algorithms, Web Development (Gradio, Streamlit), Data Analysis (NumPy, Pandas, Matplotlib), and Machine Learning (Scikit-learn, TensorFlow, OpenCV). I developed scalable code, collaborated on project design and deployment, and worked with databases (e.g., MySQL) to manage data storage solutions.",
    name: "Machine Learning Engineer Intern",
    title: "Feb 2022 - May 2023",
    profileImage: "1678694412036.jpeg",
  },
];



export const workExperience = [
  {
    id: 1,
    title: "First Place Winner in Final Year Project",
    desc: "Won first place for the project \"D.R.E.A.M\", The project involved developing an advanced image generation model capable of producing high-quality images from text prompts, demonstrating innovative thinking and meticulous execution",
    className: "md:col-span-2",
    thumbnail: "trophy.png",
  },
  {
    id: 2,
    title: "Level-1 Freelancer At Fiverr",
    desc: "Achieved a 5-star rating and 95% client retention rate for designing and developing customized 3D models for UE4 games",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "exp3.svg",
  },
];
export const companies = [
  {
    id: 1,
    name: "Typescript",
    img: "icons8-typescript.svg",
  },
  {
    id: 2,
    name: "Tailwind",
    img: "icons8-tailwind-css.svg",

  },
  {
    id: 3,
    name: "Webstorm",
    img: "icons8-webstorm.svg",

  },
  {
    id: 4,
    name: "Next.js",
    img: "icons8-nextjs.svg",

  },
];

export const socialMedia = [
  {
    id: 1,
    img: "git.svg",
    link: "https://github.com/Cyanex1702",
  },
  {
    id: 2,
    img: "icons8-kaggle.svg",
    link: "https://www.kaggle.com/cyanex1702",
  },
  {
    id: 3,
    img: "link.svg",
    link: "https://https://www.linkedin.com/in/malik-saad-jalil-146985225/",
  },
  {
    id: 4,
    img: "icons8-hugging-face.svg",
    link: "https://huggingface.co/Cyanex",
  }
];
