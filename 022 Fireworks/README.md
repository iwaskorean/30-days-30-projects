## Things I've learned 
**[Chris course - How to Code: Realistic Canvas Fireworks]**



* **Note** 
  * tau 상수 *τ* : 6.28xxx
    * 2*π*와 같은 원 상수 
    * 원주의 길이 = *τ r* = 2*π r*
  * angleIncrement = (Math.PI * 2) / particleCount;
    * 360도 내에서 생성되는 particle들의간의 각도로 생각
      * particleCount = 4일때, angleIncrement는 1.57xxx (Math.PI * 2 = 6.28 이므로)



1. ####  **Create Particle**

   - class Particle -> constructor(x, y, radius, color, velocity) 

     ```
       for (let i = 0; i < particleCount; i++) {
         particles.push(
           new Particle(mouse.x, mouse.y, 3, `hsl(${Math.random() * 360},50%,50%)`, {
             x: Math.cos(angleIncrement * i) * Math.random() * power,  ***1
             y: Math.sin(angleIncrement * i) * Math.random() * power,  ***2
           })
         );
       }
     ```

     - velocity.x/y → Math.cos/sin(angleIncrement * i) :  circular effect
     -  Math.cos/sin(angleIncrement * i) * Math.random() * power : firework effect 

   

2. #### draw & update

   - draw
     - context.globalAlpha
   - update
     - velocity.x/y *= friction
     - velocity.y += gravity
     - alpha -= 0.005



3. #### animate

   - particle.alpha > 0 : particle update
   - particle.alpha < 0 : particle remove