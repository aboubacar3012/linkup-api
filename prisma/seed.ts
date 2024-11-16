import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
const roundsOfHashing = 10;

const prisma = new PrismaClient();
const enum AuthProviderName {
  EMAIL = 'email',
}
async function main() {
  const usersData = [
    {
      id: 'user-1',
      first_name: 'John',
      last_name: 'Doe',
      date_of_birth: '1990-01-01',
      email: 'john.doe@example.com',
      profile_picture_url: 'https://example.com/john.jpg',
      description: 'Software Developer',
      interests: ['coding', 'music'],
      phone: '123-456-7890',
      company: 'Tech Corp',
      skills: ['JavaScript', 'TypeScript'],
    },
    {
      id: 'user-2',
      first_name: 'Jane',
      last_name: 'Smith',
      date_of_birth: '1985-05-15',
      email: 'jane.smith@example.com',
      profile_picture_url: 'https://example.com/jane.jpg',
      description: 'Project Manager',
      interests: ['management', 'reading'],
      phone: '987-654-3210',
      company: 'Business Inc',
      skills: ['Management', 'Communication'],
    },
    {
      id: 'user-3',
      first_name: 'Alice',
      last_name: 'Johnson',
      date_of_birth: '1992-07-20',
      email: 'alice.johnson@example.com',
      profile_picture_url: 'https://example.com/alice.jpg',
      description: 'UX Designer',
      interests: ['design', 'art'],
      phone: '555-123-4567',
      company: 'Creative Studio',
      skills: ['UX Design', 'Photoshop'],
    },
    {
      id: 'user-4',
      first_name: 'Bob',
      last_name: 'Brown',
      date_of_birth: '1988-11-30',
      email: 'bob.brown@example.com',
      profile_picture_url: 'https://example.com/bob.jpg',
      description: 'Data Scientist',
      interests: ['data', 'machine learning'],
      phone: '444-987-6543',
      company: 'Data Solutions',
      skills: ['Python', 'Machine Learning'],
    },
    {
      id: 'user-5',
      first_name: 'Charlie',
      last_name: 'Davis',
      date_of_birth: '1995-03-25',
      email: 'charlie.davis@example.com',
      profile_picture_url: 'https://example.com/charlie.jpg',
      description: 'Marketing Specialist',
      interests: ['marketing', 'travel'],
      phone: '333-222-1111',
      company: 'Marketing Experts',
      skills: ['SEO', 'Content Creation'],
    },
  ];

  for (const userData of usersData) {
    await prisma.user.upsert({
      where: { id: userData.id },
      update: userData,
      create: userData,
    });
  }

  const password = await bcrypt.hash('password-test', roundsOfHashing);
  const authProvidersData = [
    {
      id: 'auth-1-email',
      provider_name: AuthProviderName.EMAIL,
      provider_user_id: null,
      email: 'john.doe@example.com',
      user_id: 'user-1',
      password,
    },
    {
      id: 'auth-2-email',
      provider_name: AuthProviderName.EMAIL,
      provider_user_id: null,
      email: 'jane.smith@example.com',
      user_id: 'user-2',
      password,
    },
    {
      id: 'auth-3-email',
      provider_name: AuthProviderName.EMAIL,
      provider_user_id: null,
      email: 'alice.johnson@example.com',
      user_id: 'user-3',
      password,
    },
    {
      id: 'auth-4-email',
      provider_name: AuthProviderName.EMAIL,
      provider_user_id: null,
      email: 'bob.brown@example.com',
      user_id: 'user-4',
      password,
    },
    {
      id: 'auth-5-email',
      provider_name: AuthProviderName.EMAIL,
      provider_user_id: null,
      email: 'charlie.davis@example.com',
      user_id: 'user-5',
      password,
    },
  ];

  for (const authProviderData of authProvidersData) {
    await prisma.authProvider.upsert({
      where: { id: authProviderData.id },
      update: authProviderData,
      create: authProviderData,
    });
  }

  const loginHistoriesData = [
    {
      id: 'login-1',
      provider_name: AuthProviderName.EMAIL,
      user_id: 'user-1',
    },
    {
      id: 'login-2',
      provider_name: AuthProviderName.EMAIL,
      user_id: 'user-2',
    },
    {
      id: 'login-3',
      provider_name: AuthProviderName.EMAIL,
      user_id: 'user-3',
    },
    {
      id: 'login-4',
      provider_name: AuthProviderName.EMAIL,
      user_id: 'user-4',
    },
    {
      id: 'login-5',
      provider_name: AuthProviderName.EMAIL,
      user_id: 'user-5',
    },
  ];

  for (const loginHistoryData of loginHistoriesData) {
    await prisma.loginHistory.upsert({
      where: { id: loginHistoryData.id },
      update: loginHistoryData,
      create: loginHistoryData,
    });
  }

  const socialLinksData = [
    {
      id: 'social-1',
      platform: 'LinkedIn',
      url: 'https://linkedin.com/in/johndoe',
      user_id: 'user-1',
    },
    {
      id: 'social-2',
      platform: 'Twitter',
      url: 'https://twitter.com/janesmith',
      user_id: 'user-2',
    },
    {
      id: 'social-3',
      platform: 'Dribbble',
      url: 'https://dribbble.com/alicejohnson',
      user_id: 'user-3',
    },
    {
      id: 'social-4',
      platform: 'GitHub',
      url: 'https://github.com/bobbrown',
      user_id: 'user-4',
    },
    {
      id: 'social-5',
      platform: 'Instagram',
      url: 'https://instagram.com/charliedavis',
      user_id: 'user-5',
    },
  ];

  for (const socialLinkData of socialLinksData) {
    await prisma.socialLink.upsert({
      where: { id: socialLinkData.id },
      update: socialLinkData,
      create: socialLinkData,
    });
  }

  console.log('Seeding completed');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
