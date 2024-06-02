export default function Bio() {
    const biography = [
        'Welcome to my portfolio website! My name is Muhammad Mubarak, and I am a passionate and dedicated MERN stack web developer, based in Peshawar, K.P., Pakistan, with 1 year of experience in creating dynamic and user-friendly websites. I specialize in HTML, CSS, JavaScript, and have a growing expertise in popular frameworks like React and technologies like Node and Express along with relational and non-relational databases, like MySQL and MongoDB respectively. My journey into web development has been driven by a love for problem-solving and a keen interest in the ever-evolving world of technology.',
        "In addition to my technical skills, I am an avid chess player, which has taught me strategic thinking, patience, and foresight, invaluable in web development. The analytical skills from countless games help me tackle coding challenges efficiently. I am also a passionate sketch artist and Urdu and Arabic calligrapher, from where I learn to express creativity and attention to detail in designing visually appealing websites, incorporating elegance and precision into my projects.",
        'I hail from the picturesque Swat Valley, a place known for its natural beauty and rich cultural heritage. My background has instilled in me a unique perspective and a deep appreciation for aesthetics, which I bring to every project I undertake. I am eager to collaborate with others who share my enthusiasm for creating exceptional web experiences.',
        'Thank you for visiting my portfolio. I look forward to the opportunity to work with you and contribute to your next project. Please feel free to explore my work and get in touch!'
    ];

    return (
        <div className="">
            {biography.map((para, index) => (
                <p className='mt-2 text-justify text-md font-teachers text-primary' key={index}>&nbsp;&nbsp;&nbsp;&nbsp;{para}</p>
            ))}
        </div>
    );
}


