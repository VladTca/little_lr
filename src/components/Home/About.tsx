import avatar1 from '../../assets/images/avatar_1.png';
import avatar2 from '../../assets/images/avatar_2.png';
import avatar3 from '../../assets/images/avatar_4.png';
import avatar4 from '../../assets/images/avatar_3.png';
import avatar5 from '../../assets/images/avatar_6.png';
import './home.css';
import '../../assets/globalstyles.css';

const team = [
    {
        avatar: avatar1,
        name: 'Ethan',
        position: 'Chef',
        quote: 'Bringing the flavors of the Mediterranean'
    },
    {
        avatar: avatar2,
        name: 'Lydia',
        position: 'Baker',
        quote: 'Baking with love and tradition'
    },
    {
        avatar: avatar3,
        name: 'Owen',
        position: 'Host',
        quote: 'A place where you feel at home'
    },
    {
        avatar: avatar4,
        name: 'Sophia',
        position: 'Manager',
        quote: 'Adding a touch of creativity'
    },
    {
        avatar: avatar5,
        name: 'Ryan',
        position: 'Co-owner',
        quote: 'Passionate about great food'
    }
];
export default function About() {
    return (
        <div id="about" className="about">
            <div className="story">
                <h3>Little Lemon Restaurant Storyline</h3>
                <article title="Text generated by chatGPT">
                    <p>
                        The dream began in a tiny kitchen where five friends would gather every weekend, sharing
                        recipes, stories, and a deep love for good food. Each one brought something special — one a chef
                        with a flair for Mediterranean flavors, another a baker who believed in the magic of fresh
                        dough, one a host who made everyone feel at home, and two others whose creativity and passion
                        tied it all together.

                        They spent late nights planning, cooking, laughing — and imagining a place where they could
                        bring this joy to others. After months of hard work, painting walls, testing dishes, and
                        building every detail by hand, they opened the doors to their own little haven.

                        Now, their restaurant is a warm and welcoming space where the tables are always set, the lemons
                        are always fresh, and every guest is treated like family. They’re not just serving meals —
                        they’re sharing moments, one plate at a time. And they couldn’t be happier.
                    </p>
                    <div className="about-img">
                        {team.map((member, index) => (
                            <div className="avatar-card" key={index}>
                                <img src={member.avatar} alt={member.name} />
                                <div className="avatar-text">
                                    <strong>{member.name}</strong>
                                    <div>{member.position}</div>
                                    <em>“{member.quote}”</em>
                                </div>
                            </div>
                        ))}
                    </div>
                </article>
            </div>
        </div>
    )
};
