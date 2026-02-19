import { prisma } from "./lib/prisma";

async function run() {
    // const createUser = await prisma.user.create({
    //     data: {
    //         name: "Shah Nawaz",
    //         email: "nawazxp@gmail.com"
    //     }
    // })
    
    // console.log("Create user: ", createUser);

    // create post for user id = 1
    // // const createPost = await prisma.post.create({
    // //     data: {
    // //         title: "This is title",
    // //         content: "This is user-1 content",
    // //         authorId: 1
    // //     }
    // // }) 

    // console.log("Created Post: ", createPost)

    // create profile
    // const createdProfile = await prisma.profile.create({
    //     data: {
    //         bio: "web dev at bla bla",
    //         dateOfBirth: "2025-01-01",
    //         userId: 1
    //     }
    // })

    // console.log("Created Profile: ", createdProfile) not working

    // retrive all user
    const users = await prisma.user.findMany({
        include: {
            posts: true
        }
    });

    console.log(users);
}

run()