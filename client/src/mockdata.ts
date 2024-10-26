// Mock data for Categories with populated lessons
const categories = [
   {
      _id: "5f9a7b7b9d3f2a1b1c9d1c1a",
      name: "Investment",
      description: "Learn the basics of investment and grow your wealth",
      lessons: [
         "5f9a7b7b9d3f2a1b1c9d1c20",
         "5f9a7b7b9d3f2a1b1c9d1c21",
         "5f9a7b7b9d3f2a1b1c9d1c22",
         "5f9a7b7b9d3f2a1b1c9d1c23",
         "5f9a7b7b9d3f2a1b1c9d1c24",
         "5f9a7b7b9d3f2a1b1c9d1c25",
         "5f9a7b7b9d3f2a1b1c9d1c26",
         "5f9a7b7b9d3f2a1b1c9d1c27",
         "5f9a7b7b9d3f2a1b1c9d1c28",
         "5f9a7b7b9d3f2a1b1c9d1c29",
      ],
      megaQuiz: "5f9a7b7b9d3f2a1b1c9d1c1e",
   },
   {
      _id: "5f9a7b7b9d3f2a1b1c9d1c1b",
      name: "Saving",
      description: "Discover effective strategies for saving money",
      lessons: [
         "5f9a7b7b9d3f2a1b1c9d1c30",
         "5f9a7b7b9d3f2a1b1c9d1c31",
         "5f9a7b7b9d3f2a1b1c9d1c32",
         "5f9a7b7b9d3f2a1b1c9d1c33",
         "5f9a7b7b9d3f2a1b1c9d1c34",
         "5f9a7b7b9d3f2a1b1c9d1c35",
         "5f9a7b7b9d3f2a1b1c9d1c36",
         "5f9a7b7b9d3f2a1b1c9d1c37",
         "5f9a7b7b9d3f2a1b1c9d1c38",
         "5f9a7b7b9d3f2a1b1c9d1c39",
      ],
      megaQuiz: "5f9a7b7b9d3f2a1b1c9d1c1f",
   },
   {
      _id: "5f9a7b7b9d3f2a1b1c9d1c1c",
      name: "Earning",
      description: "Explore ways to increase your income",
      lessons: [
         "5f9a7b7b9d3f2a1b1c9d1c40",
         "5f9a7b7b9d3f2a1b1c9d1c41",
         "5f9a7b7b9d3f2a1b1c9d1c42",
         "5f9a7b7b9d3f2a1b1c9d1c43",
         "5f9a7b7b9d3f2a1b1c9d1c44",
         "5f9a7b7b9d3f2a1b1c9d1c45",
         "5f9a7b7b9d3f2a1b1c9d1c46",
         "5f9a7b7b9d3f2a1b1c9d1c47",
         "5f9a7b7b9d3f2a1b1c9d1c48",
         "5f9a7b7b9d3f2a1b1c9d1c49",
      ],
      megaQuiz: "5f9a7b7b9d3f2a1b1c9d1c20",
   },
   {
      _id: "5f9a7b7b9d3f2a1b1c9d1c1d",
      name: "Retiring",
      description: "Plan for a comfortable retirement",
      lessons: [
         "5f9a7b7b9d3f2a1b1c9d1c50",
         "5f9a7b7b9d3f2a1b1c9d1c51",
         "5f9a7b7b9d3f2a1b1c9d1c52",
         "5f9a7b7b9d3f2a1b1c9d1c53",
         "5f9a7b7b9d3f2a1b1c9d1c54",
         "5f9a7b7b9d3f2a1b1c9d1c55",
         "5f9a7b7b9d3f2a1b1c9d1c56",
         "5f9a7b7b9d3f2a1b1c9d1c57",
         "5f9a7b7b9d3f2a1b1c9d1c58",
         "5f9a7b7b9d3f2a1b1c9d1c59",
      ],
      megaQuiz: "5f9a7b7b9d3f2a1b1c9d1c21",
   },
];

// Mock data for Lessons with detailed content and YouTube links
const lessons = {
   investments: [
      {
         _id: "5f9a7b7b9d3f2a1b1c9d1c20",
         category: "5f9a7b7b9d3f2a1b1c9d1c1a",
         title: "Introduction to Investing",
         content: `
         <h1>Introduction to Investing</h1>
         <p>In this lesson, we'll cover the basics of investing, including:</p>
         <ul>
           <li>What is investing?</li>
           <li>Why should you invest?</li>
           <li>Different types of investments</li>
           <li>The power of compound interest</li>
         </ul>
         <p>Watch the video below for a comprehensive overview:</p>
         <iframe width="560" height="315" src="https://www.youtube.com/embed/f5j9v9dfinQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        
        
        `,
         orderInCategory: 1,
         quiz: "5f9a7b7b9d3f2a1b1c9d1c20q",
         lessonNumber: 1,
      },

      {
         _id: "5f9a7b7b9d3f2a1b1c9d1c21",
         category: "5f9a7b7b9d3f2a1b1c9d1c1a",
         title: "Understanding Stocks",
         content: `
         <h1>Understanding Stocks</h1>
         <p>This lesson focuses on stocks, covering:</p>
         <ul>
           <li>What are stocks?</li>
           <li>How do stocks work?</li>
           <li>Types of stocks</li>
           <li>Pros and cons of stock investing</li>
         </ul>
         <p>Watch this informative video to learn more about stocks:</p>
         <iframe width="560" height="315" src="https://www.youtube.com/embed/p7HKvqRI_Bo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        
        
        `,
         orderInCategory: 2,
         quiz: "5f9a7b7b9d3f2a1b1c9d1c21q",
         lessonNumber: 2,
      },

      {
         _id: "5f9a7b7b9d3f2a1b1c9d1c22",
         category: "5f9a7b7b9d3f2a1b1c9d1c1a",
         title: "Bonds and Fixed Income",
         content: `
         <h1>Bonds and Fixed Income</h1>
         <p>In this lesson, we'll explore bonds and fixed income investments:</p>
         <ul>
           <li>What are bonds?</li>
           <li>Types of bonds</li>
           <li>How bonds work</li>
           <li>Risks and benefits of bond investing</li>
         </ul>
         <p>Watch this video for a detailed explanation of bonds:</p>
         <iframe width="1214" height="607" src="https://www.youtube.com/embed/nMLVn_n1hb8" title="What are bonds? Should You Invest? Explained by CA Rachana Ranade" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        
        
        `,
         orderInCategory: 3,
         quiz: "5f9a7b7b9d3f2a1b1c9d1c22q",
         lessonNumber: 3,
      },

      {
         _id: "5f9a7b7b9d3f2a1b1c9d1c23",
         category: "5f9a7b7b9d3f2a1b1c9d1c1a",
         title: "Mutual Funds and ETFs",
         content: `
         <h1>Mutual Funds and ETFs</h1>
         <p>This lesson covers pooled investment vehicles:</p>
         <ul>
           <li>What are mutual funds and ETFs?</li>
           <li>How do they work?</li>
           <li>Types of mutual funds and ETFs</li>
           <li>Advantages and disadvantages</li>
         </ul>
         <p>Watch this video to understand mutual funds and ETFs better:</p>
         <iframe width="560" height="315" src="https://www.youtube.com/embed/Jds2CU0_N_k?si=WgnFPPsmiuKwnHIU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        
        
        `,
         orderInCategory: 4,
         quiz: "5f9a7b7b9d3f2a1b1c9d1c23q",
         lessonNumber: 4,
      },

      {
         _id: "5f9a7b7b9d3f2a1b1c9d1c24",
         category: "5f9a7b7b9d3f2a1b1c9d1c1a",
         title: "Real Estate Investing",
         content: `
         <h1>Real Estate Investing</h1>
         <p>Learn about investing in real estate:</p>
         <ul>
           <li>Types of real estate investments</li>
           <li>REITs (Real Estate Investment Trusts)</li>
           <li>Pros and cons of real estate investing</li>
           <li>Real estate market analysis</li>
         </ul>
         <p>Watch this comprehensive guide on real estate investing:</p>
         <iframe width="560" height="315" src="https://www.youtube.com/embed/ePMsEiaRFFY?si=t9hKcPP15_YkM5XD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        
        `,
         orderInCategory: 5,
         quiz: "5f9a7b7b9d3f2a1b1c9d1c24q",
         lessonNumber: 5,
      },

      {
         _id: "5f9a7b7b9d3f2a1b1c9d1c25",
         category: "5f9a7b7b9d3f2a1b1c9d1c1a",
         title: "Risk Management and Diversification",
         content: `
         <h1>Risk Management and Diversification</h1>
         <p>This lesson focuses on managing investment risks:</p>
         <ul>
           <li>Understanding investment risk</li>
           <li>The importance of diversification</li>
           <li>Asset allocation strategies</li>
           <li>Rebalancing your portfolio</li>
         </ul>
         <p>Watch this video to learn about risk management in investing:</p>
         <iframe width="560" height="315" src="https://www.youtube.com/embed/C1j3asSi2tA?si=RFi6LiYu5tChU7Lh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        
        
        `,
         orderInCategory: 6,
         quiz: "5f9a7b7b9d3f2a1b1c9d1c25q",
         lessonNumber: 6,
      },

      {
         _id: "5f9a7b7b9d3f2a1b1c9d1c26",
         category: "5f9a7b7b9d3f2a1b1c9d1c1a",
         title: "Retirement Planning",
         content: `
         <h1>Retirement Planning</h1>
         <p>Learn about planning for retirement:</p>
         <ul>
           <li>Setting retirement goals</li>
           <li>Types of retirement accounts (401(k), IRA)</li>
           <li>Calculating retirement needs</li>
           <li>Strategies for saving and investing for retirement</li>
         </ul>
         <p>Watch this informative video on retirement planning:</p>
         <iframe width="560" height="315" src="https://www.youtube.com/embed/uO8EoK6wUIY?si=L1lNFGKK_beRgLCD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        
        
        `,
         orderInCategory: 7,
         quiz: "5f9a7b7b9d3f2a1b1c9d1c26q",
         lessonNumber: 7,
      },

      {
         _id: "5f9a7b7b9d3f2a1b1c9d1c27",
         category: "5f9a7b7b9d3f2a1b1c9d1c1a",
         title: "Tax-Efficient Investing",
         content: `
         <h1>Tax-Efficient Investing</h1>
         <p>This lesson covers strategies for minimizing taxes on investments:</p>
         <ul>
           <li>Understanding investment taxes</li>
           <li>Tax-advantaged accounts</li>
           <li>Tax-loss harvesting</li>
           <li>Asset location strategies</li>
         </ul>
         <p>Watch this video to learn about tax-efficient investing:</p>
         <iframe width="560" height="315" src="https://www.youtube.com/embed/8JEnwvl_hgU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        
        
        `,
         orderInCategory: 8,
         quiz: "5f9a7b7b9d3f2a1b1c9d1c27q",
         lessonNumber: 8,
      },

      {
         _id: "5f9a7b7b9d3f2a1b1c9d1c28",
         category: "5f9a7b7b9d3f2a1b1c9d1c1a",
         title: "Reading Financial Statements",
         content: `
         <h1>Reading Financial Statements</h1>
         <p>Learn how to analyze company financial statements:</p>
         <ul>
           <li>Balance sheets</li>
           <li>Income statements</li>
           <li>Cash flow statements</li>
           <li>Key financial ratios</li>
         </ul>
         <p>Watch this comprehensive guide on reading financial statements:</p>
         <iframe width="560" height="315" src="https://www.youtube.com/embed/mnJDA3YXL9g?si=LgP3ukLiSTK6YZUy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        
        
        `,
         orderInCategory: 9,
         quiz: "5f9a7b7b9d3f2a1b1c9d1c28q",
         lessonNumber: 9,
      },

      {
         _id: "5f9a7b7b9d3f2a1b1c9d1c29",
         category: "5f9a7b7b9d3f2a1b1c9d1c1a",
         title: "Creating and Maintaining an Investment Plan",
         content: `
        <h1>Creating and Maintaining an Investment Plan</h1>
        <p>In this final lesson, we'll cover:</p>
        <ul>
          <li>Setting financial goals</li>
          <li>Creating an investment policy statement</li>
          <li>Choosing the right investments</li>
          <li>Monitoring and adjusting your plan</li>
        </ul>
        <p>Watch this video to learn about creating a solid investment plan:</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Z7GKfWHMOIU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        
        
        `,
         orderInCategory: 10,
         quiz: "5f9a7b7b9d3f2a1b1c9d1c29q",
         lessonNumber: 10,
      },
   ],
   savings: [
      {
         _id: "5f9a7b7b9d3f2a1b1c9d1c30",
         category: "5f9a7b7b9d3f2a1b1c9d1c1b",
         title: "Introduction to Savings",
         content: `
       <h1>Introduction to Savings</h1>
       <p>In this lesson, we'll cover the basics of savings, including:</p>
       <ul>
         <li>What is saving?</li>
         <li>Why is saving important?</li>
         <li>Different types of savings accounts</li>
         <li>The power of regular saving</li>
       </ul>
       <p>Watch the video below for a comprehensive overview:</p>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/BNuPJi-TEho" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      
      
      `,
         orderInCategory: 1,
         quiz: "5f9a7b7b9d3f2a1b1c9d1c30q",
         lessonNumber: 1,
      },

      {
         _id: "5f9a7b7b9d3f2a1b1c9d1c31",
         category: "5f9a7b7b9d3f2a1b1c9d1c1b",
         title: "Creating a Budget",
         content: `
       <h1>Creating a Budget</h1>
       <p>This lesson focuses on budgeting as a foundation for saving:</p>
       <ul>
         <li>Why budgeting is crucial for saving</li>
         <li>How to create a personal budget</li>
         <li>Tracking income and expenses</li>
         <li>Identifying areas to cut back and save more</li>
       </ul>
       <p>Watch this informative video on creating an effective budget:</p>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/sVKQn2I4HDM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      
      
      `,
         orderInCategory: 2,
         quiz: "5f9a7b7b9d3f2a1b1c9d1c31q",
         lessonNumber: 2,
      },

      {
         _id: "5f9a7b7b9d3f2a1b1c9d1c32",
         category: "5f9a7b7b9d3f2a1b1c9d1c1b",
         title: "Emergency Funds",
         content: `
       <h1>Emergency Funds</h1>
       <p>Learn about the importance of emergency savings:</p>
       <ul>
         <li>What is an emergency fund?</li>
         <li>How much should you save for emergencies?</li>
         <li>Where to keep your emergency fund</li>
         <li>Building your emergency fund</li>
       </ul>
       <p>Watch this video to understand the importance of emergency funds:</p>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/14QbHFMrLIw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      
      
      `,
         orderInCategory: 3,
         quiz: "5f9a7b7b9d3f2a1b1c9d1c32q",
         lessonNumber: 3,
      },

      {
         _id: "5f9a7b7b9d3f2a1b1c9d1c33",
         category: "5f9a7b7b9d3f2a1b1c9d1c1b",
         title: "High-Yield Savings Accounts",
         content: `
       <h1>High-Yield Savings Accounts</h1>
       <p>This lesson covers maximizing your savings with high-yield accounts:</p>
       <ul>
         <li>What are high-yield savings accounts?</li>
         <li>How do they differ from regular savings accounts?</li>
         <li>Pros and cons of high-yield savings accounts</li>
         <li>How to choose the best high-yield savings account</li>
       </ul>
       <p>Watch this video to learn more about high-yield savings accounts:</p>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/I_yzhOZqmYo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      
      
      `,
         orderInCategory: 4,
         quiz: "5f9a7b7b9d3f2a1b1c9d1c33q",
         lessonNumber: 4,
      },

      {
         _id: "5f9a7b7b9d3f2a1b1c9d1c34",
         category: "5f9a7b7b9d3f2a1b1c9d1c1b",
         title: "Saving for Short-Term Goals",
         content: `
       <h1>Saving for Short-Term Goals</h1>
       <p>Learn strategies for saving for short-term objectives:</p>
       <ul>
         <li>Identifying short-term financial goals</li>
         <li>Timeframes for short-term savings</li>
         <li>Best savings vehicles for short-term goals</li>
         <li>Creating a savings plan for short-term goals</li>
       </ul>
       <p>Watch this comprehensive guide on saving for short-term goals:</p>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/SQbYgRBzcYA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      

      `,
         orderInCategory: 5,
         quiz: "5f9a7b7b9d3f2a1b1c9d1c34q",
         lessonNumber: 5,
      },

      {
         _id: "5f9a7b7b9d3f2a1b1c9d1c35",
         category: "5f9a7b7b9d3f2a1b1c9d1c1b",
         title: "Saving for Long-Term Goals",
         content: `
       <h1>Saving for Long-Term Goals</h1>
       <p>This lesson focuses on saving strategies for long-term objectives:</p>
       <ul>
         <li>Identifying long-term financial goals</li>
         <li>The impact of inflation on long-term savings</li>
         <li>Investment options for long-term goals</li>
         <li>Balancing risk and return for long-term savings</li>
       </ul>
       <p>Watch this video to learn about saving for long-term goals:</p>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/lbGylGk1lnw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      
      
      `,
         orderInCategory: 6,
         quiz: "5f9a7b7b9d3f2a1b1c9d1c35q",
         lessonNumber: 6,
      },

      {
         _id: "5f9a7b7b9d3f2a1b1c9d1c36",
         category: "5f9a7b7b9d3f2a1b1c9d1c1b",
         title: "Automating Your Savings",
         content: `
       <h1>Automating Your Savings</h1>
       <p>Learn about the benefits and methods of automating your savings:</p>
       <ul>
         <li>Why automate your savings?</li>
         <li>Setting up automatic transfers</li>
         <li>Apps and tools for automated saving</li>
         <li>Overcoming challenges in automated saving</li>
       </ul>
       <p>Watch this informative video on automating your savings:</p>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/vbFd3wYwm_g" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      
      
      `,
         orderInCategory: 7,
         quiz: "5f9a7b7b9d3f2a1b1c9d1c36q",
         lessonNumber: 7,
      },

      {
         _id: "5f9a7b7b9d3f2a1b1c9d1c37",
         category: "5f9a7b7b9d3f2a1b1c9d1c1b",
         title: "Saving vs. Paying Off Debt",
         content: `
       <h1>Saving vs. Paying Off Debt</h1>
       <p>This lesson covers the balance between saving and debt repayment:</p>
       <ul>
         <li>Prioritizing savings and debt repayment</li>
         <li>The debt snowball vs. debt avalanche methods</li>
         <li>When to focus on saving more</li>
         <li>Strategies for saving while paying off debt</li>
       </ul>
       <p>Watch this video to learn about balancing savings and debt repayment:</p>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/3WE7P0W9Q9s" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      
      
      `,
         orderInCategory: 8,
         quiz: "5f9a7b7b9d3f2a1b1c9d1c37q",
         lessonNumber: 8,
      },

      {
         _id: "5f9a7b7b9d3f2a1b1c9d1c38",
         category: "5f9a7b7b9d3f2a1b1c9d1c1b",
         title: "Tax-Advantaged Savings Accounts",
         content: `
       <h1>Tax-Advantaged Savings Accounts</h1>
       <p>Learn about savings accounts with tax benefits:</p>
       <ul>
         <li>Health Savings Accounts (HSAs)</li>
         <li>Flexible Spending Accounts (FSAs)</li>
         <li>529 College Savings Plans</li>
         <li>Maximizing tax benefits in your savings strategy</li>
       </ul>
       <p>Watch this comprehensive guide on tax-advantaged savings accounts:</p>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/uuDd2JK9gVM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      
      
      `,
         orderInCategory: 9,
         quiz: "5f9a7b7b9d3f2a1b1c9d1c38q",
         lessonNumber: 9,
      },

      {
         _id: "5f9a7b7b9d3f2a1b1c9d1c39",
         category: "5f9a7b7b9d3f2a1b1c9d1c1b",
         title: "Creating a Comprehensive Savings Plan",
         content: `
      <h1>Creating a Comprehensive Savings Plan</h1>
      <p>In this final lesson, we'll cover:</p>
      <ul>
        <li>Assessing your overall financial situation</li>
        <li>Setting SMART savings goals</li>
        <li>Choosing the right savings vehicles for different goals</li>
        <li>Regularly reviewing and adjusting your savings plan</li>
      </ul>
      <p>Watch this video to learn about creating a comprehensive savings plan:</p>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/svqPFM60TeQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      
      
      `,
         orderInCategory: 10,
         quiz: "5f9a7b7b9d3f2a1b1c9d1c39q",
         lessonNumber: 10,
      },
   ],
   earnings: [
      {
         _id: "5f9a7b7b9d3f2a1b1c9d1c40",
         category: "5f9a7b7b9d3f2a1b1c9d1c1c",
         title: "Introduction to Income and Earnings",
         content: `
       <h1>Introduction to Income and Earnings</h1>
       <p>In this lesson, we'll cover the basics of income and earnings, including:</p>
       <ul>
         <li>What is income?</li>
         <li>Different types of income (active vs passive)</li>
         <li>Understanding your paycheck</li>
         <li>The importance of multiple income streams</li>
       </ul>
       <p>Watch the video below for a comprehensive overview:</p>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/PHe0bXAIuk0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      
      
      `,
         orderInCategory: 1,
         quiz: "5f9a7b7b9d3f2a1b1c9d1c40q",
         lessonNumber: 1,
      },

      {
         _id: "5f9a7b7b9d3f2a1b1c9d1c41",
         category: "5f9a7b7b9d3f2a1b1c9d1c1c",
         title: "Career Planning and Development",
         content: `
       <h1>Career Planning and Development</h1>
       <p>This lesson focuses on maximizing your earning potential through career planning:</p>
       <ul>
         <li>Assessing your skills and interests</li>
         <li>Researching high-demand careers</li>
         <li>Setting career goals</li>
         <li>Creating a career development plan</li>
       </ul>
       <p>Watch this informative video on career planning and development:</p>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/61sM7Vhl8qA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      
      
      `,
         orderInCategory: 2,
         quiz: "5f9a7b7b9d3f2a1b1c9d1c41q",
         lessonNumber: 2,
      },

      {
         _id: "5f9a7b7b9d3f2a1b1c9d1c42",
         category: "5f9a7b7b9d3f2a1b1c9d1c1c",
         title: "Negotiating Salary and Benefits",
         content: `
       <h1>Negotiating Salary and Benefits</h1>
       <p>Learn effective strategies for negotiating your compensation:</p>
       <ul>
         <li>Researching salary ranges for your position</li>
         <li>Preparing for salary negotiations</li>
         <li>Negotiating non-salary benefits</li>
         <li>Common negotiation mistakes to avoid</li>
       </ul>
       <p>Watch this video to improve your salary negotiation skills:</p>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/XY5SeCl_8NE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      
      
      `,
         orderInCategory: 3,
         quiz: "5f9a7b7b9d3f2a1b1c9d1c42q",
         lessonNumber: 3,
      },

      {
         _id: "5f9a7b7b9d3f2a1b1c9d1c43",
         category: "5f9a7b7b9d3f2a1b1c9d1c1c",
         title: "Side Hustles and Freelancing",
         content: `
       <h1>Side Hustles and Freelancing</h1>
       <p>This lesson covers ways to earn additional income:</p>
       <ul>
         <li>Identifying potential side hustles</li>
         <li>Getting started with freelancing</li>
         <li>Balancing a side hustle with full-time work</li>
         <li>Managing finances as a freelancer</li>
       </ul>
       <p>Watch this video to learn more about side hustles and freelancing:</p>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/ZKCdexz5RQ8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      
      
      `,
         orderInCategory: 4,
         quiz: "5f9a7b7b9d3f2a1b1c9d1c43q",
         lessonNumber: 4,
      },

      {
         _id: "5f9a7b7b9d3f2a1b1c9d1c44",
         category: "5f9a7b7b9d3f2a1b1c9d1c1c",
         title: "Passive Income Strategies",
         content: `
       <h1>Passive Income Strategies</h1>
       <p>Learn about creating streams of passive income:</p>
       <ul>
         <li>What is passive income?</li>
         <li>Types of passive income (real estate, dividends, royalties)</li>
         <li>Building passive income streams</li>
         <li>Risks and rewards of passive income</li>
       </ul>
       <p>Watch this comprehensive guide on passive income strategies:</p>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/M3ZE8BZP-Wg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      
      
      `,
         orderInCategory: 5,
         quiz: "5f9a7b7b9d3f2a1b1c9d1c44q",
         lessonNumber: 5,
      },

      {
         _id: "5f9a7b7b9d3f2a1b1c9d1c45",
         category: "5f9a7b7b9d3f2a1b1c9d1c1c",
         title: "Entrepreneurship and Business Ownership",
         content: `
       <h1>Entrepreneurship and Business Ownership</h1>
       <p>This lesson focuses on earning through business ownership:</p>
       <ul>
         <li>Basics of entrepreneurship</li>
         <li>Identifying business opportunities</li>
         <li>Creating a business plan</li>
         <li>Funding your business</li>
       </ul>
       <p>Watch this video to learn about starting and running a business:</p>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/KWMXxoG0-io" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      
      
      `,
         orderInCategory: 6,
         quiz: "5f9a7b7b9d3f2a1b1c9d1c45q",
         lessonNumber: 6,
      },

      {
         _id: "5f9a7b7b9d3f2a1b1c9d1c46",
         category: "5f9a7b7b9d3f2a1b1c9d1c1c",
         title: "Investing for Income",
         content: `
       <h1>Investing for Income</h1>
       <p>Learn about investments that can generate regular income:</p>
       <ul>
         <li>Dividend-paying stocks</li>
         <li>Bonds and fixed-income securities</li>
         <li>Real Estate Investment Trusts (REITs)</li>
         <li>Creating an income-focused investment portfolio</li>
       </ul>
       <p>Watch this informative video on investing for income:</p>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/kKRJ9VlLmAk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      
      
      `,
         orderInCategory: 7,
         quiz: "5f9a7b7b9d3f2a1b1c9d1c46q",
         lessonNumber: 7,
      },

      {
         _id: "5f9a7b7b9d3f2a1b1c9d1c47",
         category: "5f9a7b7b9d3f2a1b1c9d1c1c",
         title: "Tax Strategies for Maximizing Earnings",
         content: `
       <h1>Tax Strategies for Maximizing Earnings</h1>
       <p>This lesson covers ways to optimize your after-tax income:</p>
       <ul>
         <li>Understanding tax brackets and deductions</li>
         <li>Tax-advantaged accounts (401(k), IRA, HSA)</li>
         <li>Tax planning for different types of income</li>
         <li>Working with tax professionals</li>
       </ul>
       <p>Watch this video to learn about tax strategies for maximizing your earnings:</p>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/mUxHqGjXVZw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      
      
      `,
         orderInCategory: 8,
         quiz: "5f9a7b7b9d3f2a1b1c9d1c47q",
         lessonNumber: 8,
      },

      {
         _id: "5f9a7b7b9d3f2a1b1c9d1c48",
         category: "5f9a7b7b9d3f2a1b1c9d1c1c",
         title: "Continuing Education and Skill Development",
         content: `
       <h1>Continuing Education and Skill Development</h1>
       <p>Learn how ongoing learning can boost your earning potential:</p>
       <ul>
         <li>Identifying high-value skills in your industry</li>
         <li>Resources for learning new skills (online courses, certifications)</li>
         <li>Balancing education with work</li>
         <li>Leveraging new skills for career advancement</li>
       </ul>
       <p>Watch this comprehensive guide on continuing education and skill development:</p>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/7buwoZrWApU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      
      
      `,
         orderInCategory: 9,
         quiz: "5f9a7b7b9d3f2a1b1c9d1c48q",
         lessonNumber: 9,
      },

      {
         _id: "5f9a7b7b9d3f2a1b1c9d1c49",
         category: "5f9a7b7b9d3f2a1b1c9d1c1c",
         title: "Creating a Comprehensive Earning Plan",
         content: `
      <h1>Creating a Comprehensive Earning Plan</h1>
      <p>In this final lesson, we'll cover:</p>
      <ul>
        <li>Assessing your current earning situation</li>
        <li>Setting short-term and long-term income goals</li>
        <li>Developing strategies to increase your earnings</li>
        <li>Regularly reviewing and adjusting your earning plan</li>
      </ul>
      <p>Watch this video to learn about creating a comprehensive earning plan:</p>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/fTnhRFt4Zm0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      
      
      `,
         orderInCategory: 10,
         quiz: "5f9a7b7b9d3f2a1b1c9d1c49q",
         lessonNumber: 10,
      },
   ],
   retirement: [
      {
         _id: "5f9a7b7b9d3f2a1b1c9d1c50",
         category: "5f9a7b7b9d3f2a1b1c9d1c1d",
         title: "Introduction to Retirement Planning",
         content: `
       <h1>Introduction to Retirement Planning</h1>
       <p>In this lesson, we'll cover the basics of retirement planning, including:</p>
       <ul>
         <li>Why retirement planning is important</li>
         <li>When to start planning for retirement</li>
         <li>Key components of a retirement plan</li>
         <li>Common retirement planning mistakes to avoid</li>
       </ul>
       <p>Watch the video below for a comprehensive overview:</p>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/iH4UxhM_FBE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      
      
      `,
         orderInCategory: 1,
         quiz: "5f9a7b7b9d3f2a1b1c9d1c50q",
         lessonNumber: 1,
      },

      {
         _id: "5f9a7b7b9d3f2a1b1c9d1c51",
         category: "5f9a7b7b9d3f2a1b1c9d1c1d",
         title: "Estimating Retirement Needs",
         content: `
       <h1>Estimating Retirement Needs</h1>
       <p>This lesson focuses on calculating how much you'll need for retirement:</p>
       <ul>
         <li>Factors affecting retirement costs</li>
         <li>Using retirement calculators</li>
         <li>Estimating future expenses</li>
         <li>Accounting for inflation and life expectancy</li>
       </ul>
       <p>Watch this informative video on estimating retirement needs:</p>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/COe54xbOdX4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      
      
      `,
         orderInCategory: 2,
         quiz: "5f9a7b7b9d3f2a1b1c9d1c51q",
         lessonNumber: 2,
      },

      {
         _id: "5f9a7b7b9d3f2a1b1c9d1c52",
         category: "5f9a7b7b9d3f2a1b1c9d1c1d",
         title: "Understanding Retirement Accounts",
         content: `
       <h1>Understanding Retirement Accounts</h1>
       <p>Learn about different types of retirement accounts:</p>
       <ul>
         <li>Traditional and Roth IRAs</li>
         <li>401(k) and 403(b) plans</li>
         <li>SEP and SIMPLE IRAs for self-employed individuals</li>
         <li>Contribution limits and tax implications</li>
       </ul>
       <p>Watch this video to understand various retirement accounts:</p>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/Ezp9Ngc4eRk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      
      
      `,
         orderInCategory: 3,
         quiz: "5f9a7b7b9d3f2a1b1c9d1c52q",
         lessonNumber: 3,
      },

      {
         _id: "5f9a7b7b9d3f2a1b1c9d1c53",
         category: "5f9a7b7b9d3f2a1b1c9d1c1d",
         title: "Investment Strategies for Retirement",
         content: `
       <h1>Investment Strategies for Retirement</h1>
       <p>This lesson covers investment strategies for retirement savings:</p>
       <ul>
         <li>Asset allocation and diversification</li>
         <li>Risk tolerance and time horizon</li>
         <li>Balancing growth and income investments</li>
         <li>Rebalancing your portfolio</li>
       </ul>
       <p>Watch this video to learn about investment strategies for retirement:</p>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/WAoaZkwCedI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      
      
      `,
         orderInCategory: 4,
         quiz: "5f9a7b7b9d3f2a1b1c9d1c53q",
         lessonNumber: 4,
      },

      {
         _id: "5f9a7b7b9d3f2a1b1c9d1c54",
         category: "5f9a7b7b9d3f2a1b1c9d1c1d",
         title: "Social Security and Retirement",
         content: `
       <h1>Social Security and Retirement</h1>
       <p>Learn about the role of Social Security in retirement planning:</p>
       <ul>
         <li>How Social Security works</li>
         <li>Estimating your Social Security benefits</li>
         <li>Optimal age to start claiming benefits</li>
         <li>Strategies for maximizing Social Security income</li>
       </ul>
       <p>Watch this comprehensive guide on Social Security and retirement:</p>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/LJw-QouO9z4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      
      
      `,
         orderInCategory: 5,
         quiz: "5f9a7b7b9d3f2a1b1c9d1c54q",
         lessonNumber: 5,
      },

      {
         _id: "5f9a7b7b9d3f2a1b1c9d1c55",
         category: "5f9a7b7b9d3f2a1b1c9d1c1d",
         title: "Healthcare in Retirement",
         content: `
       <h1>Healthcare in Retirement</h1>
       <p>This lesson focuses on planning for healthcare costs in retirement:</p>
       <ul>
         <li>Medicare basics</li>
         <li>Long-term care insurance</li>
         <li>Health Savings Accounts (HSAs)</li>
         <li>Estimating and budgeting for healthcare expenses</li>
       </ul>
       <p>Watch this video to learn about healthcare planning for retirement:</p>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/7QVxzZkY4OQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      
      
      `,
         orderInCategory: 6,
         quiz: "5f9a7b7b9d3f2a1b1c9d1c55q",
         lessonNumber: 6,
      },

      {
         _id: "5f9a7b7b9d3f2a1b1c9d1c56",
         category: "5f9a7b7b9d3f2a1b1c9d1c1d",
         title: "Tax Planning for Retirement",
         content: `
       <h1>Tax Planning for Retirement</h1>
       <p>Learn about tax strategies for retirement:</p>
       <ul>
         <li>Tax implications of different retirement accounts</li>
         <li>Roth conversions</li>
         <li>Managing Required Minimum Distributions (RMDs)</li>
         <li>Tax-efficient withdrawal strategies</li>
       </ul>
       <p>Watch this informative video on tax planning for retirement:</p>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/6N4GFhYULBM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      
      
      `,
         orderInCategory: 7,
         quiz: "5f9a7b7b9d3f2a1b1c9d1c56q",
         lessonNumber: 7,
      },

      {
         _id: "5f9a7b7b9d3f2a1b1c9d1c57",
         category: "5f9a7b7b9d3f2a1b1c9d1c1d",
         title: "Estate Planning and Retirement",
         content: `
       <h1>Estate Planning and Retirement</h1>
       <p>This lesson covers estate planning considerations for retirees:</p>
       <ul>
         <li>Wills and trusts</li>
         <li>Power of attorney and healthcare directives</li>
         <li>Beneficiary designations</li>
         <li>Strategies for minimizing estate taxes</li>
       </ul>
       <p>Watch this video to learn about estate planning in retirement:</p>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/4YnOcKG4TkA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      
      
      `,
         orderInCategory: 8,
         quiz: "5f9a7b7b9d3f2a1b1c9d1c57q",
         lessonNumber: 8,
      },

      {
         _id: "5f9a7b7b9d3f2a1b1c9d1c58",
         category: "5f9a7b7b9d3f2a1b1c9d1c1d",
         title: "Retirement Lifestyle Planning",
         content: `
       <h1>Retirement Lifestyle Planning</h1>
       <p>Learn about non-financial aspects of retirement planning:</p>
       <ul>
         <li>Identifying your retirement goals and values</li>
         <li>Planning for leisure activities and hobbies</li>
         <li>Maintaining social connections in retirement</li>
         <li>Transitioning to retirement: psychological and emotional aspects</li>
       </ul>
       <p>Watch this comprehensive guide on planning your retirement lifestyle:</p>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/7l7oca8mYGQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      
      
      `,
         orderInCategory: 9,
         quiz: "5f9a7b7b9d3f2a1b1c9d1c58q",
         lessonNumber: 9,
      },

      {
         _id: "5f9a7b7b9d3f2a1b1c9d1c59",
         category: "5f9a7b7b9d3f2a1b1c9d1c1d",
         title: "Creating a Comprehensive Retirement Plan",
         content: `
      <h1>Creating a Comprehensive Retirement Plan</h1>
      <p>In this final lesson, we'll cover:</p>
      <ul>
        <li>Putting all the pieces together</li>
        <li>Creating a retirement timeline</li>
        <li>Strategies for catching up if you're behind</li>
        <li>Regular review and adjustment of your retirement plan</li>
      </ul>
      <p>Watch this video to learn about creating a comprehensive retirement plan:</p>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/9OE92vRHsMI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      
      
      `,
         orderInCategory: 10,
         quiz: "5f9a7b7b9d3f2a1b1c9d1c59q",
         lessonNumber: 10,
      },
   ],
};

const questions = {
   investments: [
      {
         questionText: "What is the primary benefit of investing?",
         options: [
            { optionText: "Guaranteed returns", isCorrect: false },
            {
               optionText: "Potential for wealth growth over time",
               isCorrect: true,
            },
            { optionText: "Immediate access to funds", isCorrect: false },
            { optionText: "Protection from inflation", isCorrect: false },
         ],
      },
      {
         questionText:
            "Which of the following best describes compound interest?",
         options: [
            {
               optionText: "Interest earned only on the principal amount",
               isCorrect: false,
            },
            {
               optionText:
                  "Interest earned on both the principal and accumulated interest",
               isCorrect: true,
            },
            {
               optionText: "A fixed rate of return guaranteed by banks",
               isCorrect: false,
            },
            { optionText: "Interest paid to borrowers", isCorrect: false },
         ],
      },
      {
         questionText: "What does owning a stock represent?",
         options: [
            { optionText: "Ownership of a company's debt", isCorrect: false },
            { optionText: "A loan given to a company", isCorrect: false },
            { optionText: "Partial ownership in a company", isCorrect: true },
            { optionText: "A guarantee of dividends", isCorrect: false },
         ],
      },
      {
         questionText:
            "Which type of stock typically offers voting rights to shareholders?",
         options: [
            { optionText: "Preferred stock", isCorrect: false },
            { optionText: "Common stock", isCorrect: true },
            { optionText: "Penny stock", isCorrect: false },
            { optionText: "Blue-chip stock", isCorrect: false },
         ],
      },
      {
         questionText: "What is a bond?",
         options: [
            { optionText: "A type of stock", isCorrect: false },
            { optionText: "An ownership stake in a company", isCorrect: false },
            {
               optionText: "A loan made to a government or corporation",
               isCorrect: true,
            },
            {
               optionText: "A guaranteed return on investment",
               isCorrect: false,
            },
         ],
      },
      {
         questionText:
            "Which of the following is typically considered the safest type of bond?",
         options: [
            { optionText: "Corporate bonds", isCorrect: false },
            { optionText: "Municipal bonds", isCorrect: false },
            { optionText: "U.S. Treasury bonds", isCorrect: true },
            { optionText: "Junk bonds", isCorrect: false },
         ],
      },
      {
         questionText:
            "What is the main difference between a mutual fund and an ETF?",
         options: [
            {
               optionText:
                  "Mutual funds are actively managed, ETFs are always passively managed",
               isCorrect: false,
            },
            {
               optionText:
                  "ETFs trade throughout the day, mutual funds trade once at market close",
               isCorrect: true,
            },
            {
               optionText: "Mutual funds are more tax-efficient than ETFs",
               isCorrect: false,
            },
            {
               optionText:
                  "ETFs require a higher minimum investment than mutual funds",
               isCorrect: false,
            },
         ],
      },
      {
         questionText: "What does REIT stand for in real estate investing?",
         options: [
            { optionText: "Real Estate Investment Trust", isCorrect: true },
            { optionText: "Retail Estate and Income Tax", isCorrect: false },
            { optionText: "Real Estate Insurance Trade", isCorrect: false },
            {
               optionText: "Residential Estate Investment Type",
               isCorrect: false,
            },
         ],
      },
      {
         questionText:
            "What is the primary purpose of diversification in investing?",
         options: [
            { optionText: "To guarantee higher returns", isCorrect: false },
            {
               optionText: "To eliminate all investment risk",
               isCorrect: false,
            },
            { optionText: "To reduce overall portfolio risk", isCorrect: true },
            {
               optionText: "To increase portfolio complexity",
               isCorrect: false,
            },
         ],
      },
      {
         questionText: "What is asset allocation?",
         options: [
            {
               optionText: "The process of selecting individual stocks",
               isCorrect: false,
            },
            {
               optionText:
                  "The division of investments among different asset categories",
               isCorrect: true,
            },
            {
               optionText: "The act of selling all your investments",
               isCorrect: false,
            },
            {
               optionText: "A method of predicting market trends",
               isCorrect: false,
            },
         ],
      },
      {
         questionText:
            "Which retirement account is typically offered by employers?",
         options: [
            { optionText: "IRA", isCorrect: false },
            { optionText: "Roth IRA", isCorrect: false },
            { optionText: "401(k)", isCorrect: true },
            { optionText: "Certificate of Deposit", isCorrect: false },
         ],
      },
      {
         questionText:
            "What is a key advantage of a Roth IRA over a traditional IRA?",
         options: [
            { optionText: "Higher contribution limits", isCorrect: false },
            {
               optionText: "Tax-free withdrawals in retirement",
               isCorrect: true,
            },
            {
               optionText: "Immediate tax deduction on contributions",
               isCorrect: false,
            },
            {
               optionText: "No required minimum distributions",
               isCorrect: false,
            },
         ],
      },
      {
         questionText: "What is tax-loss harvesting?",
         options: [
            {
               optionText: "A method to avoid paying any investment taxes",
               isCorrect: false,
            },
            {
               optionText:
                  "Selling investments at a loss to offset capital gains",
               isCorrect: true,
            },
            {
               optionText: "A way to increase your tax refund",
               isCorrect: false,
            },
            {
               optionText: "Investing only in tax-free municipal bonds",
               isCorrect: false,
            },
         ],
      },
      {
         questionText:
            "Which financial statement shows a company's assets, liabilities, and shareholders' equity?",
         options: [
            { optionText: "Income Statement", isCorrect: false },
            { optionText: "Cash Flow Statement", isCorrect: false },
            { optionText: "Balance Sheet", isCorrect: true },
            { optionText: "Statement of Retained Earnings", isCorrect: false },
         ],
      },
      {
         questionText: "What does the Price-to-Earnings (P/E) ratio indicate?",
         options: [
            { optionText: "The company's total debt", isCorrect: false },
            {
               optionText:
                  "How much investors are willing to pay per dollar of earnings",
               isCorrect: true,
            },
            { optionText: "The company's profit margin", isCorrect: false },
            { optionText: "The dividend yield of a stock", isCorrect: false },
         ],
      },
      {
         questionText:
            "What is the primary purpose of an investment policy statement?",
         options: [
            { optionText: "To predict future market trends", isCorrect: false },
            { optionText: "To guarantee investment returns", isCorrect: false },
            {
               optionText:
                  "To outline investment goals, strategies, and constraints",
               isCorrect: true,
            },
            {
               optionText: "To provide legal protection for financial advisors",
               isCorrect: false,
            },
         ],
      },
      {
         questionText:
            "What is the main difference between growth and value investing strategies?",
         options: [
            {
               optionText:
                  "Growth focuses on future potential, value on current worth",
               isCorrect: true,
            },
            {
               optionText: "Growth is for bonds, value is for stocks",
               isCorrect: false,
            },
            {
               optionText: "Growth is low-risk, value is high-risk",
               isCorrect: false,
            },
            {
               optionText: "Growth is for short-term, value is for long-term",
               isCorrect: false,
            },
         ],
      },
      {
         questionText:
            "What is the primary advantage of dollar-cost averaging?",
         options: [
            { optionText: "Guarantees higher returns", isCorrect: false },
            { optionText: "Eliminates all investment risk", isCorrect: false },
            {
               optionText: "Reduces the impact of market volatility",
               isCorrect: true,
            },
            { optionText: "Provides immediate tax benefits", isCorrect: false },
         ],
      },
      {
         questionText:
            "Which of the following is NOT typically considered a defensive sector?",
         options: [
            { optionText: "Utilities", isCorrect: false },
            { optionText: "Healthcare", isCorrect: false },
            { optionText: "Consumer Staples", isCorrect: false },
            { optionText: "Technology", isCorrect: true },
         ],
      },
      {
         questionText:
            "What is the primary goal of fundamental analysis in stock investing?",
         options: [
            {
               optionText: "To predict short-term price movements",
               isCorrect: false,
            },
            {
               optionText: "To determine a company's intrinsic value",
               isCorrect: true,
            },
            {
               optionText: "To identify technical chart patterns",
               isCorrect: false,
            },
            {
               optionText: "To time market entry and exit points",
               isCorrect: false,
            },
         ],
      },
   ],
   savings: [
      {
         questionText: "What is the primary purpose of saving money?",
         options: [
            {
               optionText: "To have funds for future use or emergencies",
               isCorrect: true,
            },
            { optionText: "To avoid spending money", isCorrect: false },
            { optionText: "To impress others", isCorrect: false },
            { optionText: "To keep money in a bank", isCorrect: false },
         ],
      },
      {
         questionText:
            "Which of the following is NOT typically considered a type of savings account?",
         options: [
            { optionText: "High-yield savings account", isCorrect: false },
            { optionText: "Certificate of Deposit (CD)", isCorrect: false },
            { optionText: "Money Market Account", isCorrect: false },
            { optionText: "Checking Account", isCorrect: true },
         ],
      },
      {
         questionText: "What is the first step in creating a personal budget?",
         options: [
            { optionText: "Cut all expenses", isCorrect: false },
            { optionText: "Track your income and expenses", isCorrect: true },
            { optionText: "Open a new bank account", isCorrect: false },
            { optionText: "Ask for a raise", isCorrect: false },
         ],
      },
      {
         questionText: "What is an emergency fund?",
         options: [
            {
               optionText:
                  "Money set aside for unexpected expenses or financial emergencies",
               isCorrect: true,
            },
            { optionText: "A fund for buying luxury items", isCorrect: false },
            {
               optionText: "Money invested in the stock market",
               isCorrect: false,
            },
            { optionText: "A loan from a bank", isCorrect: false },
         ],
      },
      {
         questionText:
            "How much should you typically aim to save in an emergency fund?",
         options: [
            { optionText: "1 month of expenses", isCorrect: false },
            { optionText: "3-6 months of expenses", isCorrect: true },
            { optionText: "1 year of expenses", isCorrect: false },
            { optionText: "As much as possible", isCorrect: false },
         ],
      },
      {
         questionText:
            "What is a key advantage of a high-yield savings account?",
         options: [
            {
               optionText:
                  "It offers a higher interest rate than a regular savings account",
               isCorrect: true,
            },
            { optionText: "It allows unlimited withdrawals", isCorrect: false },
            { optionText: "It's insured for higher amounts", isCorrect: false },
            { optionText: "It provides credit card rewards", isCorrect: false },
         ],
      },
      {
         questionText:
            "Which of the following is typically considered a short-term financial goal?",
         options: [
            { optionText: "Saving for retirement", isCorrect: false },
            { optionText: "Buying a house", isCorrect: false },
            { optionText: "Saving for a vacation next year", isCorrect: true },
            {
               optionText: "Funding your child's college education",
               isCorrect: false,
            },
         ],
      },
      {
         questionText:
            "Why is it important to consider inflation when saving for long-term goals?",
         options: [
            {
               optionText: "Inflation doesn't affect savings",
               isCorrect: false,
            },
            {
               optionText:
                  "Inflation can reduce the purchasing power of your savings over time",
               isCorrect: true,
            },
            {
               optionText: "Inflation always increases the value of savings",
               isCorrect: false,
            },
            {
               optionText: "Inflation only affects short-term savings",
               isCorrect: false,
            },
         ],
      },
      {
         questionText: "What is a key benefit of automating your savings?",
         options: [
            {
               optionText: "It makes saving effortless and consistent",
               isCorrect: true,
            },
            { optionText: "It guarantees higher returns", isCorrect: false },
            {
               optionText: "It eliminates the need for a budget",
               isCorrect: false,
            },
            { optionText: "It provides tax benefits", isCorrect: false },
         ],
      },
      {
         questionText:
            "When should you prioritize paying off debt over saving?",
         options: [
            { optionText: "Always prioritize saving", isCorrect: false },
            { optionText: "When you have high-interest debt", isCorrect: true },
            {
               optionText: "Only when you have no savings at all",
               isCorrect: false,
            },
            {
               optionText: "Never prioritize debt over saving",
               isCorrect: false,
            },
         ],
      },
      {
         questionText: "What is a Health Savings Account (HSA)?",
         options: [
            {
               optionText: "A regular savings account for health expenses",
               isCorrect: false,
            },
            {
               optionText:
                  "A tax-advantaged account for eligible health expenses",
               isCorrect: true,
            },
            { optionText: "A type of health insurance", isCorrect: false },
            {
               optionText: "A government-provided healthcare fund",
               isCorrect: false,
            },
         ],
      },
      {
         questionText: "What does the acronym SMART stand for in goal setting?",
         options: [
            {
               optionText:
                  "Specific, Measurable, Achievable, Relevant, Time-bound",
               isCorrect: true,
            },
            {
               optionText: "Simple, Manageable, Accurate, Realistic, Timely",
               isCorrect: false,
            },
            {
               optionText:
                  "Strategic, Motivating, Actionable, Reasonable, Tracked",
               isCorrect: false,
            },
            {
               optionText: "Savings, Money, Assets, Resources, Time",
               isCorrect: false,
            },
         ],
      },
      {
         questionText:
            "Which of the following is NOT a typical feature of a high-yield savings account?",
         options: [
            {
               optionText:
                  "Higher interest rates than traditional savings accounts",
               isCorrect: false,
            },
            { optionText: "FDIC insurance", isCorrect: false },
            { optionText: "Unlimited withdrawals", isCorrect: true },
            { optionText: "Online account management", isCorrect: false },
         ],
      },
      {
         questionText: "What is the 'pay yourself first' strategy?",
         options: [
            {
               optionText: "Spending money on yourself before paying bills",
               isCorrect: false,
            },
            {
               optionText:
                  "Saving a portion of your income before spending on anything else",
               isCorrect: true,
            },
            {
               optionText: "Paying off all debts before saving",
               isCorrect: false,
            },
            {
               optionText:
                  "Investing in yourself through education before saving",
               isCorrect: false,
            },
         ],
      },
      {
         questionText:
            "Which of these is an example of a long-term financial goal?",
         options: [
            { optionText: "Saving for a new smartphone", isCorrect: false },
            { optionText: "Building an emergency fund", isCorrect: false },
            { optionText: "Saving for retirement", isCorrect: true },
            { optionText: "Saving for next month's rent", isCorrect: false },
         ],
      },
      {
         questionText: "What is a 529 College Savings Plan?",
         options: [
            { optionText: "A type of student loan", isCorrect: false },
            {
               optionText:
                  "A tax-advantaged investment plan for education expenses",
               isCorrect: true,
            },
            { optionText: "A scholarship program", isCorrect: false },
            { optionText: "A college meal plan", isCorrect: false },
         ],
      },
      {
         questionText:
            "Which of the following is a benefit of creating a budget?",
         options: [
            { optionText: "It guarantees wealth", isCorrect: false },
            {
               optionText: "It eliminates all financial stress",
               isCorrect: false,
            },
            {
               optionText:
                  "It helps identify areas where you can cut expenses and save more",
               isCorrect: true,
            },
            { optionText: "It increases your income", isCorrect: false },
         ],
      },
      {
         questionText:
            "What is the main difference between a traditional savings account and a money market account?",
         options: [
            {
               optionText:
                  "Money market accounts typically offer higher interest rates",
               isCorrect: true,
            },
            {
               optionText: "Traditional savings accounts are not FDIC insured",
               isCorrect: false,
            },
            {
               optionText: "Money market accounts don't allow withdrawals",
               isCorrect: false,
            },
            {
               optionText:
                  "Traditional savings accounts are only for businesses",
               isCorrect: false,
            },
         ],
      },
      {
         questionText: "What is the debt snowball method?",
         options: [
            {
               optionText:
                  "Paying off debts from highest interest rate to lowest",
               isCorrect: false,
            },
            {
               optionText: "Paying off debts from smallest balance to largest",
               isCorrect: true,
            },
            {
               optionText: "Consolidating all debts into one loan",
               isCorrect: false,
            },
            {
               optionText: "Ignoring debts and focusing only on saving",
               isCorrect: false,
            },
         ],
      },
      {
         questionText:
            "Which of the following is NOT typically considered when creating a comprehensive savings plan?",
         options: [
            {
               optionText: "Your current financial situation",
               isCorrect: false,
            },
            {
               optionText: "Your short-term and long-term goals",
               isCorrect: false,
            },
            { optionText: "Your risk tolerance", isCorrect: false },
            { optionText: "Your favorite color", isCorrect: true },
         ],
      },
   ],
   earnings: [
      {
         questionText:
            "What is the primary difference between active and passive income?",
         options: [
            {
               optionText:
                  "Active income requires ongoing effort, while passive income doesn't",
               isCorrect: true,
            },
            {
               optionText: "Passive income is always higher than active income",
               isCorrect: false,
            },
            {
               optionText:
                  "Active income is tax-free, but passive income is taxed",
               isCorrect: false,
            },
            {
               optionText:
                  "There is no difference between active and passive income",
               isCorrect: false,
            },
         ],
      },
      {
         questionText:
            "Which of the following is NOT typically considered a form of passive income?",
         options: [
            { optionText: "Rental property income", isCorrect: false },
            { optionText: "Dividend payments from stocks", isCorrect: false },
            { optionText: "Freelance writing", isCorrect: true },
            { optionText: "Royalties from a book", isCorrect: false },
         ],
      },
      {
         questionText: "What is the first step in effective career planning?",
         options: [
            { optionText: "Applying for jobs", isCorrect: false },
            {
               optionText: "Assessing your skills and interests",
               isCorrect: true,
            },
            { optionText: "Writing a resume", isCorrect: false },
            { optionText: "Networking with professionals", isCorrect: false },
         ],
      },
      {
         questionText:
            "Why is it important to research salary ranges before a job interview?",
         options: [
            {
               optionText: "To impress the interviewer with your knowledge",
               isCorrect: false,
            },
            {
               optionText:
                  "To ensure you're not underpaid for your skills and experience",
               isCorrect: true,
            },
            {
               optionText:
                  "To determine how much your colleagues might be earning",
               isCorrect: false,
            },
            {
               optionText: "It's not important to research salary ranges",
               isCorrect: false,
            },
         ],
      },
      {
         questionText: "What is a side hustle?",
         options: [
            { optionText: "A full-time job", isCorrect: false },
            {
               optionText:
                  "A way to earn additional income outside of your primary job",
               isCorrect: true,
            },
            { optionText: "A type of investment", isCorrect: false },
            { optionText: "A method of reducing expenses", isCorrect: false },
         ],
      },
      {
         questionText:
            "Which of the following is an example of a passive income stream?",
         options: [
            { optionText: "Freelance graphic design", isCorrect: false },
            { optionText: "Working overtime at your job", isCorrect: false },
            {
               optionText: "Rental income from a property you own",
               isCorrect: true,
            },
            { optionText: "Selling handmade crafts online", isCorrect: false },
         ],
      },
      {
         questionText: "What is the first step in starting a business?",
         options: [
            { optionText: "Securing funding", isCorrect: false },
            { optionText: "Hiring employees", isCorrect: false },
            {
               optionText: "Identifying a business opportunity",
               isCorrect: true,
            },
            { optionText: "Registering the business name", isCorrect: false },
         ],
      },
      {
         questionText:
            "Which investment type is known for providing regular income payments?",
         options: [
            { optionText: "Growth stocks", isCorrect: false },
            { optionText: "Dividend-paying stocks", isCorrect: true },
            { optionText: "Cryptocurrencies", isCorrect: false },
            { optionText: "Collectibles", isCorrect: false },
         ],
      },
      {
         questionText:
            "What is a key benefit of investing in a 401(k) for your earnings?",
         options: [
            { optionText: "Guaranteed high returns", isCorrect: false },
            {
               optionText: "Immediate access to funds without penalties",
               isCorrect: false,
            },
            {
               optionText: "Tax advantages on contributions and growth",
               isCorrect: true,
            },
            {
               optionText: "Protection from market fluctuations",
               isCorrect: false,
            },
         ],
      },
      {
         questionText:
            "Why is continuing education important for maximizing earnings?",
         options: [
            { optionText: "It's required by law", isCorrect: false },
            {
               optionText:
                  "It helps you stay competitive and increase your value in the job market",
               isCorrect: true,
            },
            { optionText: "It's a way to avoid working", isCorrect: false },
            { optionText: "It guarantees a promotion", isCorrect: false },
         ],
      },
      {
         questionText: "What is a REIT?",
         options: [
            { optionText: "Real Estate Investment Trust", isCorrect: true },
            { optionText: "Retirement Earnings Income Tax", isCorrect: false },
            { optionText: "Regular Employment Income Type", isCorrect: false },
            {
               optionText: "Reduced Earnings Investment Transfer",
               isCorrect: false,
            },
         ],
      },
      {
         questionText:
            "Which of the following is NOT typically included in a comprehensive earning plan?",
         options: [
            {
               optionText: "Short-term and long-term income goals",
               isCorrect: false,
            },
            { optionText: "Strategies to increase earnings", isCorrect: false },
            {
               optionText: "A plan for regular review and adjustment",
               isCorrect: false,
            },
            { optionText: "A list of your favorite hobbies", isCorrect: true },
         ],
      },
      {
         questionText: "What is the purpose of a business plan?",
         options: [
            { optionText: "To impress friends and family", isCorrect: false },
            {
               optionText:
                  "To outline the business strategy, financial projections, and operational details",
               isCorrect: true,
            },
            { optionText: "To avoid paying taxes", isCorrect: false },
            { optionText: "To guarantee business success", isCorrect: false },
         ],
      },
      {
         questionText:
            "Which of the following is a potential risk of relying solely on passive income?",
         options: [
            { optionText: "It requires too much effort", isCorrect: false },
            {
               optionText: "It's always less profitable than active income",
               isCorrect: false,
            },
            {
               optionText: "Income streams may be unpredictable or dry up",
               isCorrect: true,
            },
            { optionText: "It's illegal in most countries", isCorrect: false },
         ],
      },
      {
         questionText:
            "What is the primary purpose of negotiating non-salary benefits?",
         options: [
            {
               optionText: "To make the employer's job harder",
               isCorrect: false,
            },
            {
               optionText: "To increase your total compensation package",
               isCorrect: true,
            },
            { optionText: "To reduce your workload", isCorrect: false },
            { optionText: "To impress your coworkers", isCorrect: false },
         ],
      },
      {
         questionText:
            "Which of the following is NOT a common way to fund a new business?",
         options: [
            { optionText: "Personal savings", isCorrect: false },
            { optionText: "Bank loans", isCorrect: false },
            { optionText: "Venture capital", isCorrect: false },
            { optionText: "Selling your car", isCorrect: true },
         ],
      },
      {
         questionText:
            "What is a key advantage of diversifying your income streams?",
         options: [
            {
               optionText: "It guarantees you'll become wealthy",
               isCorrect: false,
            },
            {
               optionText: "It reduces your overall financial risk",
               isCorrect: true,
            },
            {
               optionText: "It eliminates the need for budgeting",
               isCorrect: false,
            },
            {
               optionText: "It always leads to higher total income",
               isCorrect: false,
            },
         ],
      },
      {
         questionText:
            "Which of the following is a characteristic of a good side hustle?",
         options: [
            {
               optionText: "It requires a large upfront investment",
               isCorrect: false,
            },
            {
               optionText: "It interferes with your primary job",
               isCorrect: false,
            },
            {
               optionText: "It aligns with your skills and interests",
               isCorrect: true,
            },
            {
               optionText: "It guarantees immediate high earnings",
               isCorrect: false,
            },
         ],
      },
      {
         questionText:
            "What is the primary purpose of a Health Savings Account (HSA) in relation to earnings?",
         options: [
            { optionText: "To increase your salary", isCorrect: false },
            {
               optionText:
                  "To provide a tax-advantaged way to save for medical expenses",
               isCorrect: true,
            },
            { optionText: "To reduce your work hours", isCorrect: false },
            { optionText: "To invest in the stock market", isCorrect: false },
         ],
      },
      {
         questionText:
            "Which of the following is NOT typically considered when assessing your current earning situation?",
         options: [
            {
               optionText: "Your current salary and benefits",
               isCorrect: false,
            },
            { optionText: "Your skills and qualifications", isCorrect: false },
            {
               optionText: "Market demand for your profession",
               isCorrect: false,
            },
            { optionText: "Your favorite color", isCorrect: true },
         ],
      },
   ],
   retirement: [
      {
         questionText: "What is the primary purpose of retirement planning?",
         options: [
            {
               optionText: "To accumulate as much wealth as possible",
               isCorrect: false,
            },
            {
               optionText:
                  "To ensure financial security during retirement years",
               isCorrect: true,
            },
            { optionText: "To avoid paying taxes", isCorrect: false },
            { optionText: "To leave a large inheritance", isCorrect: false },
         ],
      },
      {
         questionText:
            "When is the best time to start planning for retirement?",
         options: [
            { optionText: "In your 50s", isCorrect: false },
            { optionText: "Just before retirement", isCorrect: false },
            {
               optionText: "As early as possible in your career",
               isCorrect: true,
            },
            { optionText: "After paying off all debts", isCorrect: false },
         ],
      },
      {
         questionText:
            "Which of the following is NOT a key component of a retirement plan?",
         options: [
            { optionText: "Savings strategy", isCorrect: false },
            { optionText: "Investment allocation", isCorrect: false },
            { optionText: "Daily budget", isCorrect: true },
            { optionText: "Risk management", isCorrect: false },
         ],
      },
      {
         questionText:
            "What factor does NOT typically affect retirement costs?",
         options: [
            { optionText: "Inflation", isCorrect: false },
            { optionText: "Healthcare expenses", isCorrect: false },
            { optionText: "Lifestyle choices", isCorrect: false },
            { optionText: "Current fashion trends", isCorrect: true },
         ],
      },
      {
         questionText:
            "Which retirement account allows for tax-free withdrawals in retirement?",
         options: [
            { optionText: "Traditional IRA", isCorrect: false },
            { optionText: "Roth IRA", isCorrect: true },
            { optionText: "401(k)", isCorrect: false },
            { optionText: "SEP IRA", isCorrect: false },
         ],
      },
      {
         questionText:
            "What is the main difference between a 401(k) and a 403(b) plan?",
         options: [
            { optionText: "Contribution limits", isCorrect: false },
            { optionText: "Tax treatment", isCorrect: false },
            { optionText: "Investment options", isCorrect: false },
            {
               optionText: "Type of employer offering the plan",
               isCorrect: true,
            },
         ],
      },
      {
         questionText:
            "What does asset allocation refer to in retirement planning?",
         options: [
            {
               optionText:
                  "The process of selling all your assets before retirement",
               isCorrect: false,
            },
            {
               optionText:
                  "Distributing investments among different asset categories",
               isCorrect: true,
            },
            {
               optionText: "Allocating all your assets to a single investment",
               isCorrect: false,
            },
            {
               optionText: "The process of gifting assets to family members",
               isCorrect: false,
            },
         ],
      },
      {
         questionText:
            "What is the primary purpose of diversification in a retirement portfolio?",
         options: [
            { optionText: "To increase returns", isCorrect: false },
            { optionText: "To reduce risk", isCorrect: true },
            {
               optionText: "To simplify investment decisions",
               isCorrect: false,
            },
            { optionText: "To increase taxes", isCorrect: false },
         ],
      },
      {
         questionText:
            "At what age can you start claiming Social Security retirement benefits?",
         options: [
            { optionText: "55", isCorrect: false },
            { optionText: "62", isCorrect: true },
            { optionText: "65", isCorrect: false },
            { optionText: "70", isCorrect: false },
         ],
      },
      {
         questionText:
            "What is the full retirement age for Social Security for those born in 1960 or later?",
         options: [
            { optionText: "65", isCorrect: false },
            { optionText: "66", isCorrect: false },
            { optionText: "67", isCorrect: true },
            { optionText: "70", isCorrect: false },
         ],
      },
      {
         questionText:
            "Which federal program provides health insurance to most Americans aged 65 and older?",
         options: [
            { optionText: "Medicaid", isCorrect: false },
            { optionText: "Medicare", isCorrect: true },
            { optionText: "Social Security", isCorrect: false },
            { optionText: "Affordable Care Act", isCorrect: false },
         ],
      },
      {
         questionText: "What is a Health Savings Account (HSA)?",
         options: [
            { optionText: "A type of health insurance plan", isCorrect: false },
            {
               optionText: "A savings account for general expenses",
               isCorrect: false,
            },
            {
               optionText: "A tax-advantaged account for medical expenses",
               isCorrect: true,
            },
            {
               optionText: "A retirement account for healthcare workers",
               isCorrect: false,
            },
         ],
      },
      {
         questionText: "What is a Roth conversion?",
         options: [
            {
               optionText: "Converting a traditional IRA to a Roth IRA",
               isCorrect: true,
            },
            {
               optionText: "Converting a 401(k) to a pension",
               isCorrect: false,
            },
            { optionText: "Converting stocks to bonds", isCorrect: false },
            {
               optionText: "Converting U.S. dollars to foreign currency",
               isCorrect: false,
            },
         ],
      },
      {
         questionText: "What is a Required Minimum Distribution (RMD)?",
         options: [
            {
               optionText:
                  "The minimum amount you must contribute to your retirement account",
               isCorrect: false,
            },
            {
               optionText:
                  "The minimum amount you must withdraw from certain retirement accounts annually",
               isCorrect: true,
            },
            {
               optionText:
                  "The minimum balance required to open a retirement account",
               isCorrect: false,
            },
            {
               optionText: "The minimum Social Security benefit",
               isCorrect: false,
            },
         ],
      },
      {
         questionText:
            "Which document allows someone to make financial decisions on your behalf if you're incapacitated?",
         options: [
            { optionText: "Will", isCorrect: false },
            { optionText: "Trust", isCorrect: false },
            { optionText: "Power of attorney", isCorrect: true },
            { optionText: "Beneficiary designation", isCorrect: false },
         ],
      },
      {
         questionText: "What is the main purpose of a living will?",
         options: [
            {
               optionText: "To distribute your assets after death",
               isCorrect: false,
            },
            {
               optionText:
                  "To specify your healthcare wishes if you're incapacitated",
               isCorrect: true,
            },
            {
               optionText: "To name guardians for minor children",
               isCorrect: false,
            },
            { optionText: "To avoid estate taxes", isCorrect: false },
         ],
      },
      {
         questionText:
            "Which of the following is NOT typically considered in retirement lifestyle planning?",
         options: [
            { optionText: "Hobbies and leisure activities", isCorrect: false },
            { optionText: "Social connections", isCorrect: false },
            { optionText: "Career advancement opportunities", isCorrect: true },
            { optionText: "Volunteering and giving back", isCorrect: false },
         ],
      },
      {
         questionText: "What is a catch-up contribution?",
         options: [
            {
               optionText:
                  "An extra amount you can contribute to retirement accounts if you're 50 or older",
               isCorrect: true,
            },
            {
               optionText: "A penalty for not saving enough for retirement",
               isCorrect: false,
            },
            { optionText: "A type of employer match", isCorrect: false },
            {
               optionText: "A contribution made after the tax deadline",
               isCorrect: false,
            },
         ],
      },
      {
         questionText: "What is the 4% rule in retirement planning?",
         options: [
            {
               optionText:
                  "A guideline for how much of your savings you can withdraw annually in retirement",
               isCorrect: true,
            },
            {
               optionText:
                  "The recommended percentage of income to save for retirement",
               isCorrect: false,
            },
            {
               optionText:
                  "The average annual return on retirement investments",
               isCorrect: false,
            },
            {
               optionText: "The inflation rate used in retirement calculations",
               isCorrect: false,
            },
         ],
      },
      {
         questionText:
            "Which of the following is NOT a common source of retirement income?",
         options: [
            { optionText: "Social Security", isCorrect: false },
            { optionText: "Pension", isCorrect: false },
            { optionText: "Personal savings", isCorrect: false },
            { optionText: "Student loans", isCorrect: true },
         ],
      },
   ],
};
