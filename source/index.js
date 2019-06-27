import Preact from "preact"
import Yaafloop from "yaafloop"

import "views/Emoji.view.less"

require("statgrab/do")

let loop = new Yaafloop(function(delta) {
    this.view = Preact.render(<View delta={delta}/>, document.body, this.view)
})

let images = require.context("images/blobs", true)
images = images.keys().map((key) => images(key))
images.push(images[2])
images.push(images[4])
images.push(images[8])

const JITTER = 0.15

class View {
    render() {
        return (
            <div class="View">
                <title>Hype Jam</title>
                <Frame>
                    <header>
                        <div class="Title">
                            <img src={require("images/wreath.png")}/>
                        </div>
                        <div class="Emojis">
                            {images.map((image) => (
                                <Emoji image={image}/>
                            ))}
                        </div>
                    </header>
                    asdasdasd
                    <div class="Flex"/>
                    <footer>
                        <div class="Text">
                            So excited to see you at Hype Jam!!
                            <i class="fab fa-twitter"/>
                        </div>
                    </footer>
                </Frame>
            </div>
        )
    }
}

class Frame {
    render() {
        return (
            <div class="Frame" id="frame">
                {this.props.children}
            </div>
        )
    }
}

class Emoji {
    render() {
        return (
            <div class="Emoji">
                <div class="Image" style={this.style}/>
            </div>
        )
    }
    get style() {
        return {
            // "top": this.props.emoji.y + "em",
            // "left": this.props.emoji.x + "em",
            "background-image": "url(" + this.props.image + ")",
            "transform": "rotate(" + (Math.random() * 30 - 15) + "deg)",
            "margin-top": (Math.random() * JITTER) - (JITTER / 2) + "em",
            "margin-left": (Math.random() * JITTER) - (JITTER / 2) + "em",
        }
    }
}
