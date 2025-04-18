abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}

  abstract getSepia(): void;
  getReelTime(): number {
    return 8;
  }
}

// const myCam = new TakePhoto("test", "Test");
// Cannot create an instance of an abstract class.ts(2511)
// constructor TakePhoto(cameraMode: string, filter: string): TakePhoto

class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }

  getSepia(): void {
    console.log(
      `Applying sepia filter on ${this.cameraMode} mode with ${this.filter}`
    );
  }

  getReelTime(): number {
    return 10;
  }
}

const myCamera = new Instagram("Potrait", "Vintage", 3);
myCamera.getSepia();
console.log("Reel time:", myCamera.getReelTime());
