import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const seedUsers = [
    {
      firstName: "alice",
      lastName: "young",
      gender: "female",
      userTracking: { lat: 38.065, lng: -77.333 },
    },
    {
      firstName: "mike",
      lastName: "smith",
      gender: "male",
      userTracking: { lat: 39.065, lng: -79.333 },
    },
    {
      firstName: "ron",
      lastName: "davis",
      gender: "male",
      userTracking: { lat: 39.065, lng: -81.333 },
    },
    {
      firstName: "angela",
      lastName: "james",
      gender: "female",
      userTracking: { lat: 50.065, lng: -81.333 },
    },
    {
      firstName: "jim",
      lastName: "jones",
      gender: "male",
      userTracking: { lat: 50.065, lng: -86.333 },
    },
    {
      firstName: "george",
      lastName: "lewis",
      gender: "male",
      userTracking: { lat: 61.065, lng: -86.333 },
    },
  ];
  console.log(seedUsers);
  await prisma.user.createMany({
    data: seedUsers.map(({ firstName, lastName, gender }, index) => ({
      id: index + 1,
      firstName,
      lastName,
      gender,
    })),
    skipDuplicates: true,
  });
  await prisma.userTracking.createMany({
    data: seedUsers.map(({ userTracking }, index) => ({
      lat: userTracking.lat,
      lng: userTracking.lng,
      userId: index + 1,
    })),
    skipDuplicates: true,
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
