# guzinvisuals
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Portfolio</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Welcome to My Portfolio</h1>
        <nav>
            <ul>
                <li><a href="#photos">Photos</a></li>
                <li><a href="#videos">Videos</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <section id="photos">
        <h2>Photos</h2>
        <div class="gallery">
            <!-- Add your photos here -->
            <img src="photo1.jpg" alt="Photo 1">
            <img src="photo2.jpg" alt="Photo 2">
            <img src="photo3.jpg" alt="Photo 3">
            <!-- Add more photos as needed -->
        </div>
    </section>

    <section id="videos">
        <h2>Videos</h2>
        <div class="video-gallery">
            <!-- Add your videos here -->
            <video controls>
                <source src="video1.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <video controls>
                <source src="video2.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <video controls>
                <source src="video3.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <!-- Add more videos as needed -->
        </div>
    </section>

    <section id="contact">
        <h2>Contact Me</h2>
        <form>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
            
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            
            <label for="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
            
            <button type="submit">Send</button>
        </form>
    </section>

    <footer>
        <p>&copy; 2024 My Portfolio. All rights reserved.</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
