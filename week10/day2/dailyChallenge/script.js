class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }

  watch() {
    console.log(
      `${this.uploader} watched all ${this.time} seconds of ${this.title}!`
    );
  }
}
// Instantiate a new Video instance and call the watch() method
const firstVideo = new Video("Funny Cats Compilation", "User123", 300);
firstVideo.watch();

// Instantiate a second Video instance with different values
const secondVideo = new Video("Travel Vlog: Paris", "AdventureGirl", 600);
secondVideo.watch();

// Bonus: Use an array to store data for five Video instances
const videoDataArray = [
  { title: "Cooking Tutorial", uploader: "ChefMaster", time: 450 },
  { title: "Gaming Livestream", uploader: "GamerPro", time: 1200 },
  { title: "DIY Home Decor", uploader: "CraftyCreator", time: 480 },
  { title: "Fitness Workout", uploader: "FitFreak", time: 600 },
  { title: "Tech Review", uploader: "TechGeek", time: 720 },
];

// Bonus: Loop through the array to instantiate those instances
const videoInstances = videoDataArray.map(
  (videoData) => new Video(videoData.title, videoData.uploader, videoData.time)
);

// Bonus: Call the watch() method for each instance in the array
videoInstances.forEach((videoInstance) => videoInstance.watch());
