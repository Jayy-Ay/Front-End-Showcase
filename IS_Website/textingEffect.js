function textingEffect(element, text, i=0) {
    element.textContent += text[i]
    if (i === text.length-1) { return}
    setTimeout(() => textingEffect(element, text, i+1), 50)
}

const div = document.querySelector(".typer");
const text = "Well, well, well, if it isn't my favorite grandchild finally gracing these dusty old floorboards with their presence! Come in, come in, dear, don't just stand there like a startled owl! Let me get a good look at you. My goodness, haven't you grown something fierce? You look thinner though, did they not feed you decent meals wherever you were gallivanting off to? City folk these days, always in such a rush, never taking the time to sit down and enjoy a proper plate of something nourishing. Here, let me take those bags from you, you look beat. Must have been a long journey. Did you travel by one of those newfangled airplanes again? Makes me dizzy just thinking about it, whizzing through the sky like a metal bird. Back in my day, trains were all the rage, slow and steady, time to appreciate the scenery. Now, where did I put that kettle on? Must have gotten distracted by the sight of you. Ah, here it is! Tea's the answer, for everything, I tell you. Calms the nerves, soothes the soul, puts some pep back in your step. I just baked a fresh batch of your favorite oatmeal raisin cookies, still warm from the oven. You know I can't resist spoiling you rotten, even if you do protest sometimes. Now, tell me all about your adventures, every last detail! Spill the beans, child, what have you been up to?"
textingEffect(div, text);