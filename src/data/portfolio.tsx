// Portfolio Data - Update this file to customize your portfolio content

export const personalInfo = {
    name: 'Shihab Sarar',
    title: 'Computer Science & Engineering Professional',
    tagline: 'Building innovative solutions through research and code',
    email: 'shihabsararchamok@gmail.com',
    phone: '+8801788667080',
    location: 'Dhaka, Bangladesh',
    links: {
        github: 'https://github.com/ShihabSarar12',
        linkedin: 'https://www.linkedin.com/in/shihabsarar1201/',
    },
    bio: 'Passionate Computer Science & Engineering professional with expertise in full-stack development, machine learning, and distributed systems. I love solving complex problems and building scalable solutions that make a real impact.',
};

export const experiences = [
    {
        id: 1,
        company: 'Synex Digital',
        position: 'Software Engineer',
        location: 'Dhanmondi, Dhaka',
        type: 'Full-time',
        startDate: 'Oct 2024',
        endDate: 'Present',
        color: 'from-indigo-500 to-purple-500',
        achievements: [
            'Built backend for “LinkAndLevelUp” a Canadian project, serving 1000+ users',
            'Integrated AWS S3, reducing media latency by ~40% with presigned URLs and parallel uploads',
            'Enabled real-time communication with sub-200 ms latency using Socket.IO and Redis scaling',
            'Contributed to real-time baby health monitoring IoT system for an Australian project',
            'Optimized IoT backend communication, ensuring sub-120 ms alerts for baby health monitoring',
        ],
        technologies: ['React', 'Node.js', 'Express.js', 'AWS', 'MySQL', 'IOT'],
    },
    {
        id: 2,
        company: 'AUST Satellite Communication Laboratory',
        position: 'Assistant Researcher',
        location: 'Tejgoan, Dhaka',
        type: 'Full-time',
        startDate: 'Mar 2024',
        endDate: 'Jul 2025',
        color: 'from-green-400 to-blue-500',
        achievements: [
            'Developed hybrid ML framework, improving mangrove classification from 75–80% to 98%',
            'Integrated Random Forest, NDVI, NDWI, and masking to boost accuracy',
            'Quantified 3% increase in deep forest and decline in water bodies due to Cyclone Bulbul and human impact',
            'Analyzed hydrological and ecological effects of Cyclone Bulbul on mangrove and water bodies',
        ],
        technologies: ['Machine Learning', 'Random Forest', 'NDVI', 'NDWI'],
    },
];

export const education = [
    {
        id: 1,
        institution: 'Ahsanullah University of Science and Technology',
        degree: 'Bachelor of Science in Computer Science and Engineering',
        field: 'Specialization in Machine Learning & AI (Computer Vision)',
        location: 'Tejgoan, Dhaka',
        startDate: 'Dec 2021',
        endDate: 'Dec 2025',
        gpa: '3.4/4.0',
        color: 'from-purple-500 to-pink-500',
        description:
            'Strong foundation in computer science fundamentals and software engineering along with Machine Learning and AI',
        coursework: [
            'Digital Image Processing',
            'Pattern Recognition (Statistical Learning) and Machine Learning',
            'Soft Computing (Deep Learning)',
            'Artificial Intelligence',
            'Data Analytics',
        ],
        achievements: [
            'Published - 2 conference papers and 1 journal paper',
            'Assistant Researcher - AUST Satellite Communication Laboratory',
            'Head of Programming - AUST Satellite Communication Laboratory',
            'Champion - AUST CSE CARNIVAL',
        ],
    },
    {
        id: 2,
        institution: 'Ishwardi Government College',
        degree: 'Higher Secondary Certificate',
        field: 'Background in Science',
        location: 'Ishwardi, Pabna',
        startDate: 'Dec 2018',
        endDate: 'Dec 2020',
        gpa: '5.0/5.0',
        color: 'from-blue-500 to-cyan-500',
        description: 'Strong foundation in Science',
        coursework: [
            'Physics',
            'Chemistry',
            'Biology',
            'Mathematics',
            'Higher Mathematics',
        ],
        achievements: [
            'Red Card - Bangladesh Army (85 BMA Long)',
            'Champion - Badminton (Locale)',
            'Finalist - National Science Fair',
            'Champion - Drawing (Sub-division)',
            '2nd Runner Up - Drawing (Sub-division)',
        ],
    },
];

export const research = [
    {
        id: 1,
        title: 'Hybrid Method for Monitoring Sundarbans Mangrove Forest Using Satellite Images',
        authors:
            'MD. Abdullah Al Naim, Shihab Sarar, Mahdi Hasan, Md Maruf Hossain Tasin, Omar Farrok',
        yourName: 'Shihab Sarar',
        venue: '2nd International Conference on Information and Communication Technology (ICICT) 2024',
        platform: 'IEEE',
        date: 'October 2024',
        type: 'Conference Paper',
        rank: 'C',
        impactFactor: '',
        color: 'from-purple-500 to-pink-500',
        description:
            'Proposed hybrid method using Random Forest, NDVI, and NDWI for better satellite-based mangrove land cover classification in the Sundarbans.',
        links: {
            paper: 'https://www.researchgate.net/profile/Omar-Farrok/publication/388262471_Hybrid_Method_for_Monitoring_Sundarbans_Mangrove_Forest_Using_Satellite_Images/links/679b95244c479b26c9c2c3e4/Hybrid-Method-for-Monitoring-Sundarbans-Mangrove-Forest-Using-Satellite-Images.pdf',
            code: 'https://github.com/yourusername/research-project',
        },
        storyBehindIt: `I was approached by one of my batchmates regarding a research opportunity where a senior from the **Electrical and Electronics Engineering** department needed a programmer. My name was recommended for the role, and I was invited to sit for an interview at the AUST Satellite Communication Laboratory, a prestigious lab that was established with the ambitious goal of developing a **3U nanosatellite** project. After a rigorous interview process, I was selected and joined the lab as an Assistant Researcher. Under the mentorship of **Dr. Omar Farrok**, a world-renowned scientist ranked among the top **2% globally** by **Stanford University**, I embarked on a mission that would significantly contribute to satellite communication and environmental conservation.

                ![AUST Satellite Communication Laboratory](/images/AUST SCL.jpeg)

                Our primary task was to develop a robust system capable of efficiently classifying the land masses of the **Sundarbans**, an ecologically critical region. The Sundarbans, home to one of the largest mangrove forests in the world, is facing increasing threats from human activities, such as deforestation, which not only contributes to **higher carbon emissions** but also risks the extinction of numerous **endangered species**. The goal was to develop a model that could accurately monitor land cover changes, providing vital data that could be used to safeguard this ecosystem for future generations. 

                The classification system we developed aimed to provide real-time, actionable insights to stakeholders, conservationists, and policymakers, enabling them to make informed decisions on how best to preserve the Sundarbans and mitigate the environmental degradation occurring due to human intervention.

                ![Dr. Omar Farrok](/images/Omar Farrok.jpeg)

                Under Dr. Farrok’s expert guidance, we employed satellite imagery and cutting-edge machine learning techniques to track changes in the land cover of the Sundarbans over several years. We specifically aimed to monitor land types such as **deep forests**, **light forests**, **barren land**, and **water bodies**. Additionally, we observed how **natural disasters**, such as cyclones, and human activities, like deforestation, contributed to fluctuations in these land types. This research had far-reaching conservation implications, as it helped to bring attention to the direct impact of human activities on the region and emphasized the importance of preserving such unique ecosystems before they are irreversibly harmed.

                Our model's ability to classify and monitor land use changes in the Sundarbans provides critical data for ongoing conservation initiatives and offers a scientific foundation for the preservation of this global treasure. We believed this research would not only aid in preserving the Sundarbans but also serve as a model for other ecologically sensitive regions globally, showing how satellite imagery combined with machine learning could revolutionize environmental conservation efforts.

                `,

        problemStatement: `**Challenge:** Accurately classifying land cover types in the **Sundarbans mangrove forest** has always been a challenge. Traditional methods like **NDVI** (Normalized Difference Vegetation Index) and **NDWI** (Normalized Difference Water Index) are commonly used to detect vegetation health and water bodies, but they fall short when it comes to distinguishing between complex land types, especially in ecologically diverse regions like the Sundarbans. These limitations can hinder the effective monitoring and conservation of the region, which is crucial due to its environmental significance.

                    **Specific Issues:**
                    - NDVI and NDWI are good at detecting general vegetation health but struggle to accurately classify multiple land types, such as deep forests, light forests, barren land, and water bodies, which are present in the Sundarbans.
                    - The Sundarbans, a vital mangrove ecosystem, faces rapid changes due to both **natural disasters** (like Cyclone Bulbul in 2019) and **human activities** (such as deforestation, land reclamation, and salt farming), which complicate monitoring and analysis.
                    - Cloud cover and shadows often obscure satellite imagery, creating inaccurate or incomplete data that further complicates land cover classification.

                    ![NDVI](/images/NDVI.png)

                    **Research Gap:** Previous studies have focused on traditional satellite imagery analysis and employed simple methods like NDVI for land classification. However, these methods have not fully addressed the need for integrating **machine learning** techniques with **cloud and shadow masking**, which are essential for improving the accuracy and reliability of land cover classification in challenging environments like the Sundarbans. This gap in the existing literature is where our research comes in: we aimed to fill this gap by introducing a hybrid model that combines traditional indices with machine learning to handle complex land cover types and environmental conditions more effectively.

                    **Challenges Faced:** One major difficulty we encountered during the dry season was that both plants and soil emit almost the same reflectance, causing challenges in distinguishing between vegetation and bare soil, as shown in the image below. This made it difficult for traditional methods to differentiate between land types, even when satellite images were clear.

                    ![Challenge](/images/Challenge.png)
            
                `,

        methodology: `
                Initially, we considered using deep learning models for this project, but the computational cost would have been prohibitively expensive, especially given the low configuration of the hardware available to us. Therefore, we shifted towards a more practical **Machine Learning** approach, which provided a balance between accuracy and computational efficiency.
        
                **1. Hybrid Approach to Classification**
                To address the challenges of traditional methods, we developed a **hybrid classification model** that combines **NDVI**, **NDWI**, and **Random Forest (RF)** techniques. This hybrid approach leveraged the strengths of both spectral indices and machine learning algorithms to achieve more accurate and reliable land cover classification.

                    - **Data Preprocessing:** The first step involved addressing the **cloud and shadow masking** issue that often distorts satellite imagery. By removing obstructed or false pixels, we ensured that only high-quality, usable data was fed into the model.
                    - **Modeling:** We combined **NDVI** and **NDWI** indices with additional features derived from satellite bands to classify land types into **deep forest**, **light forest**, **water bodies**, and **barren land**. We chose the **Random Forest (RF)** algorithm for its versatility and strong performance in handling large datasets with diverse input features.

                    ![Masking](/images/Masking.png)

                **2. Experimental Setup and Validation**
                - We tested the model using **satellite imagery from Landsat 8**, spanning from **2013 to 2022**, to monitor changes over the last decade.
                - The dataset was split into a **70% training** and **30% testing** ratio, ensuring that the model was rigorously validated.
                - Evaluation metrics like **Precision**, **Recall**, and **F1 Score** were employed, and our model achieved an **overall accuracy of 98%**, underscoring the power of our hybrid approach.

                **3. Optimization Techniques**
                - To further enhance the performance, we utilized **data scaling**, **cloud masking**, and **Random Forest classification**, ensuring robust and accurate results for different land types under varying environmental conditions. 
                `,

        result: `**Key Findings:**
                    1. The **hybrid model** significantly outperformed traditional methods, improving classification accuracy by **18%**, especially in identifying complex land types.
                    2. **Cloud and shadow masking** proved to be a critical preprocessing step, improving model precision by **25%** by eliminating erroneous data from obstructed satellite images.
                    3. The **Random Forest classifier** was particularly effective at distinguishing between diverse land types such as forests, barren land, and water bodies, even in challenging conditions where other methods failed.

                    ![Result](/images/Changes.png)

                    **Real-World Impact:**
                    - This research not only advanced our ability to classify land cover types in the Sundarbans but also provided a scalable framework for future **conservation efforts** in the region.
                    - The model can now be used to **track long-term changes** in the Sundarbans, which is critical for understanding the impacts of climate change, deforestation, and natural disasters like cyclones.
                    - The **real-time monitoring capabilities** of the model allow for **data-driven conservation decisions**, helping policymakers make informed choices to protect the Sundarbans.
                    - Additionally, by deploying the model on **edge devices**, we were able to reduce **cloud computing costs** by **70%**, making the system more cost-effective and sustainable in the long run, especially for use in remote or underdeveloped areas.

                    ![Deep Forest](/images/Deep Forest.png)
                    ![Light Forest](/images/Light Forest.png)
                    ![Barren Land](/images/Barren Land.png)
                    ![Water](/images/Water.png)
            
                    The images above clearly show the model's ability to accurately capture the relationships between land types in the Sundarbans. The impact of **Cyclone Bulbul (2019)** is evident in the fluctuations in forest cover and the increase in barren land areas, which the model has successfully highlighted.`,

        tags: [
            'Machine Learning',
            'Satellite',
            'Optimization',
            'Classification',
        ],
        impact: 'Achieved 98% classification accuracy for Sundarbans mangrove forest.',
    },

    {
        id: 2,
        title: 'Scalable Distributed Training Framework for Large Language Models',
        authors: 'Your Name, Research Team',
        yourName: 'Your Name',
        venue: 'Neural Information Processing Systems (NeurIPS) 2022',
        platform: 'NeurIPS',
        date: 'December 2022',
        type: 'Conference Paper',
        rank: 'A*',
        impactFactor: '5.2',
        color: 'from-orange-500 to-red-500',
        description:
            'Developed distributed training framework that enables efficient training of LLMs across thousands of GPUs',
        links: {
            paper: 'https://arxiv.org/paper-link-2',
            code: 'https://github.com/yourusername/distributed-training',
        },
        storyBehindIt: `This project began when our research lab acquired access to a large GPU cluster, but existing frameworks couldn't efficiently utilize all the resources. Training large language models was painfully slow, taking weeks even with hundreds of GPUs.

I dove deep into distributed systems literature and GPU programming, learning about communication bottlenecks and memory hierarchies. The key insight came from analyzing network traces – we were spending more time moving data between GPUs than actually computing!

By redesigning the data pipeline and implementing smart gradient compression, we achieved near-linear scaling. The moment our training job utilized 1000+ GPUs efficiently was unforgettable – it felt like witnessing the future of AI research.`,
        storyImage: null,
        problemStatement: `**Challenge:** Training large language models (10B+ parameters) requires massive computational resources and faces severe scalability bottlenecks.

**Key Problems:**
- Communication overhead increases super-linearly with GPU count
- Memory constraints limit batch sizes and model sizes
- Load imbalance causes GPU underutilization
- Existing frameworks scale poorly beyond 256 GPUs

**Impact:** Training GPT-3 scale models takes months and costs millions, limiting research accessibility.`,
        methodology: `**1. Gradient Compression Pipeline**
- Implemented top-k sparsification with error feedback
- Designed adaptive compression based on layer sensitivity
- Used mixed-precision gradients (FP32/FP16/INT8)

**2. Communication Optimization**
- Overlapped computation with communication
- Implemented hierarchical all-reduce for better bandwidth utilization
- Used NCCL optimizations and custom kernels

**3. Memory Management**
- Gradient checkpointing with smart recomputation
- Pipeline parallelism with micro-batching
- ZeRO optimizer state sharding

**4. Load Balancing**
- Dynamic work stealing between GPUs
- Adaptive batch splitting
- Asynchronous gradient updates`,
        methodologyImage: null,
        result: `**Scalability Results:**
- **Near-linear scaling** up to 2048 GPUs (93% efficiency)
- **40% faster** training than baseline frameworks
- **2x larger models** trainable on same hardware
- **50% reduction** in memory footprint

**Training Improvements:**
- GPT-2 (1.5B params): 3 days → 1.2 days
- GPT-3 scale (13B params): 6 weeks → 3.5 weeks
- Achieved 55% MFU (model FLOPs utilization)

**Adoption:**
- Framework adopted by 3 major research labs
- Used to train 5+ published models
- 2000+ GitHub stars
- Featured in NVIDIA GTC keynote`,
        resultImage: null,
        tags: ['LLMs', 'Distributed Systems', 'GPU Computing'],
        impact: 'Reduced training time by 40% compared to baseline methods',
    },
    {
        id: 3,
        title: 'Adaptive Caching Strategies for Real-Time Data Pipelines',
        authors: 'Your Name, Dr. Alice Johnson',
        yourName: 'Your Name',
        venue: 'Journal of Distributed Computing (JDC) 2021',
        platform: 'JDC',
        date: 'September 2021',
        type: 'Journal Article',
        rank: 'Q1',
        impactFactor: '3.9',
        color: 'from-green-500 to-emerald-500',
        description:
            'Investigated adaptive caching mechanisms to optimize throughput in high-volume streaming data pipelines',
        links: {
            paper: 'https://journal-link.com/article',
        },
        storyBehindIt: `Working with a financial services company, I observed that their real-time trading platform suffered from unpredictable latency spikes during market volatility. Traditional caching strategies failed because market patterns changed rapidly.

The breakthrough came from applying reinforcement learning to cache management. Instead of using static policies, we trained an agent to predict which data would be needed next based on market conditions. It was fascinating to see the system learn trading patterns and adapt its caching strategy in real-time.`,
        storyImage: null,
        problemStatement: `**Challenge:** Real-time data pipelines in financial trading systems face unpredictable access patterns and strict latency requirements (<10ms).

**Issues:**
- Static caching policies cause frequent cache misses during volatility
- LRU/LFU don't account for temporal access patterns
- High-frequency trading requires sub-millisecond responses
- Data freshness requirements conflict with caching

**Goal:** Develop adaptive caching that learns from access patterns and market conditions.`,
        methodology: `**1. Reinforcement Learning Framework**
- Modeled caching as MDP (Markov Decision Process)
- Used Deep Q-Network (DQN) for policy learning
- Reward function balancing hit rate, latency, and freshness

**2. Feature Engineering**
- Historical access patterns (sliding window)
- Market volatility indicators
- Time-of-day patterns
- Cross-asset correlations

**3. System Design**
- Multi-tier cache hierarchy (L1: memory, L2: SSD)
- Predictive prefetching based on learned patterns
- Dynamic TTL adjustment
- Parallel cache warming

**4. Evaluation**
- Deployed in production trading system
- A/B testing against LRU, LFU, ARC baselines
- Measured throughput, latency (p50, p99), hit rates`,
        methodologyImage: null,
        result: `**Performance Gains:**
- **2.5x throughput** increase (50K → 125K requests/sec)
- **p99 latency** reduced from 45ms to 8ms
- **Cache hit rate** improved from 72% to 91%
- **40% reduction** in downstream database load

**Key Insights:**
1. RL agent learned to predict market-moving events
2. Adaptive TTL prevented stale data issues
3. Cross-asset prefetching improved hit rates by 15%
4. System adapted to regime changes within 10 minutes

**Production Impact:**
- Deployed across 5 trading desks
- Enabled new high-frequency trading strategies
- Reduced infrastructure costs by 30%
- Filed patent for adaptive caching system`,
        resultImage: null,
        tags: ['Caching', 'Stream Processing', 'Performance Optimization'],
        impact: 'Improved pipeline throughput by 2.5x in production systems',
    },
];

export const achievements = [
    {
        id: 1,
        title: 'Best Paper Award',
        organization: 'ICML 2023',
        date: 'July 2023',
        description:
            'Received best paper award for research on edge computing and deep learning optimization',
        category: 'Research',
        prize: '$5,000',
        image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800&q=80',
        details: `Received the **prestigious Best Paper Award** at the **International Conference on Machine Learning (ICML) 2023**, one of the top AI conferences globally with an acceptance rate of only **21.4%**.

![Conference Presentation](https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80)

**Recognition Details:**
- Selected from **6,538 submissions** worldwide
- Presented to an audience of **5,000+ researchers**
- Featured in **ICML's highlight session** (top 2% of papers)
- Paper has been **cited 150+ times** in 6 months

**Award Includes:**
- **$5,000 cash prize**
- **Invited talk** at major tech companies
- **Media coverage** in MIT Technology Review
- Invitation to **NeurIPS 2024** as keynote speaker

The work demonstrates how **edge computing** can revolutionize AI deployment on resource-constrained devices, with applications in **robotics, IoT, and mobile computing**.`,
    },
    {
        id: 2,
        title: 'Tech Innovation Award',
        organization: 'Tech Corp',
        date: 'March 2023',
        description:
            'Recognized for exceptional contribution to system architecture redesign',
        category: 'Professional',
        prize: 'Stock Options + $10,000 Bonus',
        stipend: '$10,000',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
        details: `Awarded the **Tech Innovation Award** for leading the **complete redesign** of our microservices architecture, resulting in **45% reduction in latency** and **60% cost savings**.

**Project Impact:**
- Redesigned architecture serving **5 million users**
- Reduced **cloud costs by $2M annually**
- Improved **system reliability** from 99.5% to 99.99%
- **Zero-downtime migration** over 6 months

![Team Celebration](https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80)

**Recognition:**
- **Employee of the Year** runner-up
- Featured in company-wide **all-hands presentation**
- **Patent filed** for novel caching strategy
- Promoted to **Senior Software Engineer**

**Award Package:**
- **$10,000 cash bonus**
- **Stock options** worth $50,000
- **Professional development budget** of $5,000
- Invitation to **leadership training program**`,
    },
    {
        id: 3,
        title: 'Open Source Contributor',
        organization: 'GitHub',
        date: '2020 - Present',
        description:
            'Active contributor to major open source projects with 500+ stars on personal repositories',
        category: 'Community',
    },
    {
        id: 4,
        title: 'Hackathon Winner',
        organization: 'Global Hackathon 2022',
        date: 'November 2022',
        description:
            'First place among 200+ teams for developing AI-powered accessibility tool',
        category: 'Competition',
        prize: '$25,000 + Incubator Program',
        image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80',
        details: `Won **first place** at the **Global Accessibility Hackathon 2022**, competing against **200+ teams** from around the world in a **48-hour coding marathon**.

![Hackathon Presentation](https://images.unsplash.com/photo-1559223607-a43c990c2e23?w=800&q=80)

**Our Solution:**
Developed **"VoiceNav"** - an AI-powered tool that helps **visually impaired users** navigate websites using natural language voice commands.

**Technical Highlights:**
- **Real-time audio processing** with <100ms latency
- **Computer vision** to understand page layout
- **Natural language understanding** for commands
- Works on **any website** without modifications

**Competition Results:**
- **First place** overall (200+ teams)
- **Best Use of AI** special award
- **Audience Choice Award**

**Prize Package:**
- **$25,000 cash prize**
- **6-month incubator program** at Tech Hub
- **Mentorship** from industry leaders
- **AWS credits** worth $10,000
- Featured on **TechCrunch** and **The Verge**

The project is now being developed into a **commercial product** with backing from angel investors.`,
    },
    {
        id: 5,
        title: 'Graduate Research Fellowship',
        organization: 'National Science Foundation',
        date: '2021',
        description:
            'Awarded prestigious NSF Graduate Research Fellowship for doctoral studies',
        category: 'Academic',
    },
    {
        id: 6,
        title: 'Published Author',
        organization: 'Various Conferences & Journals',
        date: '2021 - 2023',
        description:
            'Published 5+ peer-reviewed papers in top-tier CS conferences and journals',
        category: 'Research',
    },
];

export const skills = {
    categories: [
        {
            name: 'Programming Languages',
            items: [
                'Python',
                'JavaScript',
                'TypeScript',
                'Java',
                'C++',
                'SQL',
                'C#',
                'C',
                'PHP',
            ],
        },
        {
            name: 'Web Technologies',
            items: [
                'React',
                'Node.js',
                'Express',
                'HTML',
                'CSS',
                'REST APIs',
                'Tailwind',
                'Three.js',
                'Reach Three Fiber',
            ],
        },
        {
            name: 'AI/ML',
            items: [
                'PyTorch',
                'NumPy',
                'Scikit-learn',
                'Matplotlib',
                'OpenCV',
                'Matlab',
                'Pandas',
                'Data Analytics',
                'Forecasting',
            ],
        },
        {
            name: 'Cloud, DevOps & Tools',
            items: [
                'AWS',
                'Docker',
                'Github',
                'CI/CD',
                'Linux',
                'Agile',
                'System Design',
                'Microservices',
                'Performance Optimization',
            ],
        },
        {
            name: 'Databases',
            items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Mongoose'],
        },
        {
            name: 'Blockchain & Cyber Security',
            items: [
                'Solidity',
                'Ethereum',
                'Web3.js',
                'IPFS',
                'Cryptography',
                'OSINT',
                'Steganography',
                'Web Security',
            ],
        },
    ],
};

export const projects = [
    {
        id: 1,
        name: 'AI Code Assistant',
        description:
            'VS Code extension that uses machine learning to provide intelligent code suggestions and auto-completion',
        longDescription:
            'A comprehensive VS Code extension that leverages transformer-based language models to understand code context and provide intelligent suggestions. Features include multi-language support, real-time error detection, code refactoring suggestions, and documentation generation.',
        technologies: ['TypeScript', 'Python', 'TensorFlow', 'VS Code API'],
        github: 'https://github.com/yourusername/ai-code-assistant',
        demo: 'https://demo-link.com',
        image: 'code-assistant',
        color: 'from-orange-500 to-red-500',
        stats: {
            stars: 1200,
            users: '5K+',
            downloads: '50K+',
        },
        features: [
            'Context-aware code completion',
            'Real-time error detection and fixes',
            'Automatic documentation generation',
            'Multi-language support (10+ languages)',
            'Refactoring suggestions',
        ],
        storyBehindIt: `During my final year of university, I noticed my friends spending **hours debugging** simple syntax errors and searching for API documentation. This inspired me to create a tool that could **intelligently understand code context** and provide real-time assistance.

![Development Process](https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80)

The project started as a **weekend hackathon idea** but quickly gained traction when I shared it on Reddit. Within a week, we had **500+ beta testers** providing valuable feedback. The most challenging part was training the model on diverse codebases while keeping it **lightweight enough** for real-time suggestions.`,
        howIGotTheWork: `I was working as a **teaching assistant** for an introductory programming course when I realized students were making the same mistakes repeatedly. I pitched the idea to my professor, who connected me with the **university's innovation lab**.

They provided me with:
- **GPU credits** for model training
- **Mentorship** from industry experts
- Access to their **code repository** for training data

The project was also selected for **GitHub's Student Developer Program**, which gave us additional resources and visibility.

![Team Collaboration](https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80)`,
        whatItDoes: `**AI Code Assistant** is a **VS Code extension** that acts as your intelligent coding companion. Here's what makes it special:

**Core Features:**
- **Real-time Code Completion**: Suggests complete functions based on context
- **Error Detection**: Identifies bugs before you even run the code
- **Smart Refactoring**: Recommends code improvements and optimizations
- **Auto-Documentation**: Generates docstrings and comments automatically

**Technical Implementation:**
- Uses a **fine-tuned GPT-based model** trained on 10M+ lines of code
- Implements **local caching** for instant suggestions
- Supports **10+ programming languages** including Python, JavaScript, Java, and C++

![Feature Demo](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80)

**Impact:**
- **50,000+ downloads** in the first 6 months
- **4.8/5 star rating** on VS Code Marketplace
- Saves developers an average of **2 hours per week**
- Featured in **Microsoft's Developer Blog**`,
    },
    {
        id: 2,
        name: 'Distributed Task Queue',
        description:
            'High-performance distributed task queue system with real-time monitoring and auto-scaling capabilities',
        longDescription:
            'Enterprise-grade distributed task queue built from scratch, supporting millions of tasks per day with fault tolerance, priority queues, and auto-scaling. Includes comprehensive monitoring dashboard and admin interface.',
        technologies: ['Go', 'Redis', 'Docker', 'React'],
        github: 'https://github.com/yourusername/task-queue',
        image: 'task-queue',
        color: 'from-purple-500 to-pink-500',
        stats: {
            stars: 850,
            users: '2K+',
            downloads: '20K+',
        },
        features: [
            'Processes 1M+ tasks/day',
            'Auto-scaling based on queue depth',
            'Priority queues with rate limiting',
            'Real-time monitoring dashboard',
            'Fault tolerance with retry logic',
        ],
        storyBehindIt: `At my internship at a **fintech startup**, I witnessed firsthand how their **legacy task processing system** was causing delays during peak hours. Tasks were getting lost, and there was **no visibility** into what was happening.

I spent my evenings building a **proof-of-concept** using Go and Redis. The CTO was impressed by the **30% performance improvement** in my prototype and greenlit the project for production use.

![System Architecture](https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80)`,
        howIGotTheWork: `This project was born out of **necessity** at my internship. The existing system couldn't handle:
- **Peak load** during market hours
- **Failed task recovery**
- Real-time monitoring

I proposed building a new system and was given **3 months** to deliver a working prototype. The company provided:
- **Dedicated server resources** for testing
- **Code review** from senior engineers
- **Production deployment support**

After successful deployment, they offered me a **full-time position** and made this project **open-source**.`,
        whatItDoes: `**Distributed Task Queue** is a **high-performance task processing system** designed for enterprise scale:

**Key Capabilities:**
- **Processes 1M+ tasks daily** with **sub-second latency**
- **Automatic scaling** based on queue depth and system load
- **Priority queues** with configurable rate limiting
- **Fault tolerance** with automatic retries and dead-letter queues

**Architecture:**
- Built with **Go** for maximum concurrency
- Uses **Redis** for ultra-fast queue operations
- **Docker containers** for easy deployment
- **React dashboard** for real-time monitoring

![Monitoring Dashboard](https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80)

**Production Stats:**
- Handles **10,000 tasks/second** during peak
- **99.99% uptime** over 2 years
- Used by **50+ companies** in production
- Reduced infrastructure costs by **40%** compared to alternatives`,
    },
    {
        id: 3,
        name: 'Real-Time Analytics Dashboard',
        description:
            'Interactive dashboard for visualizing streaming data with sub-second latency',
        longDescription:
            'Modern analytics platform for real-time data visualization, supporting multiple data sources, custom visualizations, and collaborative features. Built for high-frequency data updates with optimized rendering.',
        technologies: ['React', 'D3.js', 'WebSocket', 'Node.js'],
        github: 'https://github.com/yourusername/analytics-dashboard',
        demo: 'https://demo-link2.com',
        image: 'dashboard',
        color: 'from-blue-500 to-cyan-500',
        stats: {
            stars: 650,
            users: '1K+',
            downloads: '15K+',
        },
        features: [
            'Sub-second data updates',
            '30+ chart types',
            'Collaborative dashboards',
            'Custom data connectors',
            'Export and sharing features',
        ],
    },
];
