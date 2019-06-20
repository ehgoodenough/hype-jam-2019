import Preact from "preact"
import Yaafloop from "yaafloop"

require("statgrab/do")

let loop = new Yaafloop(function(delta) {
    this.view = Preact.render(<View delta={delta}/>, document.body, this.view)
})

let images = require.context("images/blobs", true)
images = images.keys().map((key) => images(key))

const emoji = [
    {"x": 0, "y": 0, "image": images[0]},
    {"x": 1, "y": 0, "image": images[1]},
    {"x": 2, "y": 0, "image": images[2]},
    {"x": 3, "y": 0, "image": images[3]},
    {"x": 4, "y": 0, "image": images[4]},
    {"x": 5, "y": 0, "image": images[5]},
    // ...
    {"x": 0, "y": 1, "image": images[6]},
    {"x": 1, "y": 1, "image": images[7]},
    {"x": 2, "y": 1, "image": images[8]},
    {"x": 3, "y": 1, "image": images[9]},
    {"x": 4, "y": 1, "image": images[10]},
    {"x": 5, "y": 1, "image": images[11]},
    // ...
    {"x": 0, "y": 2, "image": images[12]},
    {"x": 1, "y": 2, "image": images[13]},
    {"x": 2, "y": 2, "image": images[14]},
    {"x": 3, "y": 2, "image": images[15]},
    {"x": 4, "y": 2, "image": images[16]},
    {"x": 5, "y": 2, "image": images[17]},
]

console.log(images.length)

class View {
    render() {
        return (
            <div class="View">
                {emoji.map((emoji) => (
                    <Emoji emoji={emoji}/>
                ))}
            </div>
        )
    }
}

import "views/Emoji.view.less"

const JITTER = 0.1

class Emoji {
    render() {
        return (
            <div class="Emoji" style={this.style}/>
        )
    }
    get style() {
        return {
            "top": this.props.emoji.y + "em",
            "left": this.props.emoji.x + "em",
            "background-image": "url(" + this.props.emoji.image + ")",
            "margin-top": (Math.random() * JITTER) - (JITTER / 2) + "em",
            "margin-left": (Math.random() * JITTER) - (JITTER / 2) + "em",
        }
    }
}
