/**
 * Consider the case of a hiring manager.
 * It is impossible for one person to interview for each of the positions.
 * Based on the job opening, she/he has to decide and delegate the interview steps to different people.
 */
// It provides a way to delegate the instantiation logic to child classes.

// Taking our hiring manager example above. First of all we have an interviewer interface and some implementations for it

/*
Interviewer interface
askQuestions()
*/
class Developer {
  askQuestions() {
    console.log("Asking about design patterns!");
  }
}

class CommunityExecutive {
  askQuestions() {
    console.log("Asking about community building");
  }
}

//Now let us create our HiringManager
class HiringManager {
  takeInterview() {
    const interviewer = this.makeInterviewer();
    interviewer.askQuestions();
  }
}

// Now any child can extend it and provide the required interviewer
class DevelopmentManager extends HiringManager {
  makeInterviewer() {
    return new Developer();
  }
}

class MarketingManager extends HiringManager {
  makeInterviewer() {
    return new CommunityExecutive();
  }
}

const devManager = new DevelopmentManager();
devManager.takeInterview(); // Output: Asking about design patterns

const marketingManager = new MarketingManager();
marketingManager.takeInterview(); // Output: Asking about community building.
