    // Define data per course
    export const courseData = {
      btech: {
        semesters: 8,
        branches: ["CSE", "Civil", "Electrical", "ECE", "Mechanical"],
        common: [1, 2],
        data: {
                "1": {
                common: [
                { title: "Syllabus", url: "https" },
                { title: "Study Books", url: "https" },
                { title: "HandWritten Notes", url: "https" },
                { title: "Important Questions", url: "https" },
                { title: "Video Reference", url: "https" },
                { title: "Previous Year Papers", url: "https" }
                ]
            },
            "2": {
                common: [
                { title: "Syllabus", url: "https" },
                { title: "Study Books", url: "https" },
                { title: "HandWritten Notes", url: "https" },
                { title: "Important Questions", url: "https" },
                { title: "Video Reference", url: "https" },
                { title: "Previous Year Papers", url: "https" }
                ]
            }, 

              // 3rd to 8th semester data (excluding 1st and 2nd)
            "3": {
                "Civil": [
                  { title: "Syllabus", url: "" },
                  { title: "Study Books", url: "https" },
                  { title: "HandWritten Notes", url: "https" },
                  { title: "Important Questions", url: "https" },
                  { title: "Video Reference", url: "https" },
                  { title: "Previous Year Papers", url: "https" }
                ],
                "CSE": [
                  { title: "Syllabus", url: "" },
                  { title: "Study Books", url: "https" },
                  { title: "HandWritten Notes", url: "https" },
                  { title: "Important Questions", url: "https" },
                  { title: "Video Reference", url: "https" },
                  { title: "Previous Year Papers", url: "https" }
                ],
                // Add similar blocks for Electrical, ECE, Mechanical
            },
        } // Fill in as needed
      },
      polytechnic: {
        semesters: 6,
        branches: ["CSE", "Civil", "Electrical", "ECE", "Mechanical"],
        common: [],
        data: {}
      },
      mba: {
        semesters: 4,
        branches: ["HR", "Finance", "Marketing"],
        common: [],
        data: {}
      },
      mtech: {
        semesters: 4,
        branches: ["CSE", "Civil", "Electrical", "ECE"],
        common: [],
        data: {}
      }
    };
