import { Injectable, signal } from '@angular/core';
import { Society, IdentityVerificationOption } from '../models/society.model';

@Injectable({
  providedIn: 'root'
})
export class SocietyService {
  // Signal with the list of all societies
  private societiesSignal = signal<Society[]>([
    {
      id: 'montelibero',
      name: 'Montelibero',
      shortDescription: 'A digital libertarian society based on blockchain',
      description: 'Montelibero is a digital libertarian society that utilizes blockchain technology to create a decentralized community governed by voluntary agreements. It focuses on personal freedom, free markets, and minimizing coercion in social relations.',
      thumbnail: 'logos/montelibero.png',
      memberCount: 2500,
      contractCount: 156,
      location: 'Digital',
      founded: new Date('2018-05-12'),
      website: 'https://montelibero.org'
    },
    {
      id: 'liberstad',
      name: 'Liberstad',
      shortDescription: 'Private city project in southern Norway',
      description: 'Liberstad is a private city project in southern Norway focused on creating a society where people can live together with real freedom. It aims to establish a voluntary, stateless society based on private property rights and non-aggression principles.',
      thumbnail: 'logos/liberstad.png',
      memberCount: 960,
      contractCount: 78,
      location: 'Norway',
      founded: new Date('2017-01-18'),
      website: 'https://www.liberstad.com'
    },
    {
      id: 'liberland',
      name: 'Liberland',
      shortDescription: 'Micronation on the Danube river',
      description: 'The Free Republic of Liberland is a sovereign state located between Croatia and Serbia on the west bank of the Danube river. Liberland was founded on the principles of personal and economic freedom, with a minimal state interference.',
      thumbnail: 'logos/liberland.png',
      memberCount: 7500,
      contractCount: 230,
      location: 'Danube River',
      founded: new Date('2015-04-13'),
      website: 'https://liberland.org'
    },
    {
      id: 'fsp',
      name: 'Free State Project',
      shortDescription: 'Political migration movement to New Hampshire',
      description: 'The Free State Project is a political migration movement that encourages libertarians to move to New Hampshire to create a society with minimal government oversight. The goal is to create a critical mass of liberty-minded individuals to influence state politics.',
      thumbnail: 'logos/fsp.png',
      memberCount: 5000,
      contractCount: 120,
      location: 'New Hampshire, USA',
      founded: new Date('2001-09-01'),
      website: 'https://www.fsp.org'
    },
    {
      id: 'penadexo',
      name: 'Penadexo',
      shortDescription: 'Decentralized autonomous society',
      description: 'Penadexo is a decentralized autonomous society built on blockchain technology, focused on creating a borderless community with its own digital governance and economic systems. It emphasizes privacy, autonomy, and voluntary collaboration.',
      thumbnail: 'logos/penadexo.png',
      memberCount: 1200,
      contractCount: 95,
      location: 'Digital',
      founded: new Date('2020-03-15'),
      website: 'https://penadexo.org'
    },
    {
      id: 'cryptocity',
      name: 'Cryptocity',
      shortDescription: 'Crypto-focused community with physical territory',
      description: 'Cryptocity is a hybrid society with both digital presence and physical territory, focused on creating a crypto-friendly environment for businesses and residents. It aims to be a testing ground for blockchain governance and cryptocurrency adoption.',
      thumbnail: 'logos/cryptocity.webp',
      memberCount: 850,
      contractCount: 65,
      location: 'Multiple Locations',
      founded: new Date('2019-07-22'),
      website: 'https://cryptocity.network'
    }
  ]);

  // Identity verification options
  private verificationOptionsSignal = signal<IdentityVerificationOption[]>([
    {
      id: 'mtl-id',
      name: 'MTL ID',
      description: 'Verify using the Montelibero blockchain identity system. Secure and privacy-focused verification.',
      icon: 'verified_user'
    },
    {
      id: 'free-id',
      name: 'FreeID',
      description: 'Open-source distributed identity verification protocol that works across multiple platforms.',
      icon: 'fingerprint'
    }
  ]);

  // Society the user is currently viewing
  private selectedSocietySignal = signal<Society | null>(null);

  // Joining process status
  private joiningProcessActiveSignal = signal<boolean>(false);
  private selectedIdentityIdSignal = signal<string | null>(null);

  constructor() {}

  // Get all societies
  getSocieties() {
    return this.societiesSignal;
  }

  // Get society by ID
  getSocietyById(id: string): Society | undefined {
    return this.societiesSignal().find(society => society.id === id);
  }

  // Set selected society
  setSelectedSociety(society: Society | null) {
    this.selectedSocietySignal.set(society);
  }

  // Get selected society
  getSelectedSociety() {
    return this.selectedSocietySignal;
  }

  // Get verification options
  getVerificationOptions() {
    return this.verificationOptionsSignal;
  }

  // Start joining process
  startJoiningProcess() {
    this.joiningProcessActiveSignal.set(true);
    this.selectedIdentityIdSignal.set(null);
  }

  // Cancel joining process
  cancelJoiningProcess() {
    this.joiningProcessActiveSignal.set(false);
    this.selectedIdentityIdSignal.set(null);
  }

  // Select identity for joining
  selectIdentity(identityId: string) {
    this.selectedIdentityIdSignal.set(identityId);
  }

  // Get joining process state
  getJoiningProcessActive() {
    return this.joiningProcessActiveSignal;
  }

  // Get selected identity
  getSelectedIdentity() {
    return this.selectedIdentityIdSignal;
  }

  // Complete joining process with selected identity
  async completeJoiningProcess(): Promise<boolean> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // In a real app, this would handle the actual joining with the selected identity
    this.joiningProcessActiveSignal.set(false);
    this.selectedIdentityIdSignal.set(null);
    
    return true;
  }
}
