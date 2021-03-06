![Logo](/assets/hypefitment-logo_edited.png)

# HYPEFITMENT

[Live Site](https://aiden-jang.github.io/HYPEFITMENT/ "HYPEFITMENT")

![Screenshot](/assets/hypefitment-screenshot.PNG)

## Background

Getting that perfect fitment you wanted on your car takes a lot of trial and error. Have you ever wished there was a tool that visually calculates and shows the rim and tire setups before you drop $$$ on them? HYPEFITMENT eliminates the hassle. You do not need to waste time googling or digging in forums on what kind of rims and tires will fit your car or truck.

## Functionality & MVPs

In HYPEFITMENT, users will be able to:

* Input their current or OE (Original Equipment) setups.
* Input their new setups.
* See how their new setups will look like.
* See the comparsion between their current and new setups.
* Lock and change the only specific specs and see the update.
* Gain information on how their new setups will affect their cars' overall performance compared to their current setups.

## Wireframes 

![Wireframes](/assets/wireframes.png)

## Technologies, Libraries, APIs

* HTML
* CSS
* Javascript
* Canvas API
* Webpack
* Npm
* DOM API

## Code Snippet

### Vanilla DOM API

Every time when there is a change in the specs, this function will be called. Using DOM Manipulation in Vanilla JavaScript, it successfully renders and updates the new specs on the screen immediately.

```javascript
    const update = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        background.drawBackground();
        oldWheelView.drawWheel();
        newWheelView.drawWheel();

        const wheelValue = document.getElementById(`${wheel.status}` + "-wheel-value");
        const wheelSpec = ` ${wheel.tireWidth} / ${wheel.tireProfile}R${wheel.tireDiameter}
        x  ${wheel.rimWidth} ET${wheel.rimOffset}`;
        wheelValue.innerHTML = wheelSpec;

        performance(oldWheelView.wheel,newWheelView.wheel);
    }
```