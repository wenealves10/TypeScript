type VotingOption = {
  numberOfVotes: number;
  option: string;
};

export class Voting {
  private _votingOptions: VotingOption[] = [];
  constructor(public details: string) {}

  addVotingOption(votingOption: VotingOption): void {
    this._votingOptions.push(votingOption);
  }

  vote(VotingIndex: number): void {
    if (!this._votingOptions[VotingIndex]) return;
    this._votingOptions[VotingIndex].numberOfVotes += 1;
  }

  get votingOptions(): VotingOption[] {
    return this._votingOptions;
  }
}

export class VotingAPP {
  private voting: Voting[] = [];

  addVoting(voting: Voting): void {
    this.voting.push(voting);
  }

  showVoting(): void {
    for (const voting of this.voting) {
      console.log(voting.details);
      for (const votingOption of voting.votingOptions) {
        console.log(votingOption.option, votingOption.numberOfVotes);
      }
      console.log('##############################');
      console.log('');
    }
  }
}

const votingOne = new Voting('What is your favorite programming language?');
votingOne.addVotingOption({ option: 'Python', numberOfVotes: 0 });
votingOne.addVotingOption({ option: 'TypeScript', numberOfVotes: 0 });
votingOne.addVotingOption({ option: 'Javascript', numberOfVotes: 0 });
votingOne.addVotingOption({ option: 'Go lang', numberOfVotes: 0 });
votingOne.vote(1);
votingOne.vote(1);
votingOne.vote(1);
votingOne.vote(1);
votingOne.vote(0);
votingOne.vote(2);
votingOne.vote(2);
votingOne.vote(2);
votingOne.vote(3);
const votingAPP = new VotingAPP();
votingAPP.addVoting(votingOne);
votingAPP.showVoting();
