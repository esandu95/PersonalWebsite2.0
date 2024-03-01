import Menu from "./Menu";
import WebsiteCard from "./WebsiteCard";

function Portofolio(){
    return(
        <>
            <Menu/>
            <div className="portofolio">
            <WebsiteCard
                title="Something"
                info="aklsfldsahl  asyd;aysd; as;d;ya;sdh asdha sdhakd ;ask.da
                alsdgalsdg a a;sd a d;adhalsgdaksgdak.sd
                jasdj jkasgdui lakshd"
                img="src\assets\tindog.png"
                link="https://esandu95.github.io/eduard-developer/"
            />
                        <WebsiteCard
                title="Something"
                info="thi si something"
                img="src\assets\tindog.png"
                link="https://esandu95.github.io/eduard-developer/"
            />
                        <WebsiteCard
                title="Something"
                info="thi si something"
                img="src\assets\tindog.png"
                link="https://esandu95.github.io/eduard-developer/"
            />
            </div>
        </>
    )
}

export default Portofolio;