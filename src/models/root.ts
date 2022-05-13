import { action, makeObservable, observable } from "mobx";

export interface Drug {
  id: string;
  title: string;
  manufacturer: string;
  description: string;
  duration: string;
}

export class RootStore {
  public condition?: string;
  public duration?: string;
  public drugs?: Drug;

  constructor() {
    makeObservable(this, {
      condition: observable,
      duration: observable,
      setCondition: action,
      getRecommendedDrugs: action,
    });
  }

  public setCondition(value: string): void {
    this.condition = value;
  }

  public setDuration(value: string): void {
    this.duration = value;
  }

  public async getRecommendedDrugs(duration: string): Promise<any> {
    try {
      const response = await fetch(
        `http://localhost:3000/drugs?duration=${duration}`,
      );
      const data = await response.json();
      if (response.ok) {
        this.drugs = data;
      }
    } catch (error) {
      return error;
    }
  }
}
