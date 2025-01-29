const db = require('../models');

// To use await, we need an async function.
async function seed() {
    // Get the place, H-Thai-ML
    let place = await db.Place.findOne({ name: 'H-Thai-ML' });

    if (!place) {
        console.log("Place not found!");
        process.exit(1);
    }

    // Sample random comments
    const comments = [
        { author: 'Famished Fran', rant: false, stars: 5.0, content: 'Wow, simply amazing! Highly recommended!' },
        { author: 'Hungry Henry', rant: true, stars: 2.0, content: 'Not what I expected. Service was slow.' },
        { author: 'Satisfied Sam', rant: false, stars: 4.0, content: 'Great place! Would definitely come again.' },
        { author: 'Grumpy Greg', rant: true, stars: 1.0, content: 'Terrible experience. Will never return.' },
        { author: 'Excited Ellie', rant: false, stars: 4.5, content: 'Food was delicious and service was excellent!' }
    ];

    // Decide how many random comments to add (e.g., 2-4)
    const numComments = Math.floor(Math.random() * 3) + 2; // Random number between 2 and 4

    for (let i = 0; i < numComments; i++) {
        let randomComment = comments[Math.floor(Math.random() * comments.length)];
        
        // Create the comment in the database
        let comment = await db.Comment.create(randomComment);
        
        // Add to the place's comments array
        place.comments.push(comment.id);
        
        console.log(`Added comment: "${comment.content}" by ${comment.author}`);
    }

    // Save the place with new comments
    await place.save();

    console.log(`Successfully added ${numComments} comments to ${place.name}`);

    // Exit the program
    process.exit();
}

seed();
