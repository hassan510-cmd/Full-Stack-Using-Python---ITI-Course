class shape {

    constructor(shape_name, x, y) {
        this.shape_name = shape_name
        this.x = x
        this.y = y
        // alert("welcome your " + shape_name)
    }
}

class rectangle extends shape {
    area = 0
    cir = 0
    type = "rectangle"
    constructor(w = 0, h = 0, obj = 0) {
        super("rectangle")
        this.w = w
        this.h = h
        this.obj = obj
        if (this.obj && (!this.w)) {
            this.w = obj.w
            this.h = obj.h
        }

    }
    calc_area() {
        this.area = this.w * this.h
        return this.area
    }
    calc_cir() {
        this.cir = (this.w + this.h) * 2
        return this.cir
    }

    log() {
        console.log(`Circumfer:${this.cir} ,Area:${this.area},Type:rectangle`);
    }
}


class square extends shape {
    area = 0
    cir = 0

    type = "square"
    constructor(w = 0, h = 0, l = 0, obj = 0) {
        super("square")
        this.w = w
        this.h = h
        this.l = l
        this.obj = obj
        if (this.obj && (!this.l)) {
            this.w = obj.w
            this.h = obj.h
            this.l = obj.l
        }

    }

    calc_area() {
        this.area = this.l * this.l
        return this.area
    }

    calc_cir() {
        this.cir = (this.l + this.l) * 2
        return this.cir
    }

    log() {
        console.log(`Circumfer:${this.cir} ,Area:${this.area},Type:square`);
    }
}

class oval extends shape {
    area = 0
    cir = 0
    type = "oval"
    constructor(a = 0, b = 0, obj = 0) {
        super("oval")
        this.a = a
        this.b = b
        this.obj = obj
        if (this.obj && (!this.a)) {
            this.a = obj.a
            this.b = obj.b
        }


    }
    calc_area() {
        this.area = this.a * this.b * 3.14
        return this.area
    }

    calc_cir() {
        this.cir = (this.a + this.b) * 3.14
        return this.cir
    }
    log() {
        console.log(`Circumfer:${this.cir} ,Area:${this.area},Type:oval`);
    }
}

class circle extends shape {
    area = 0
    cir = 0
    type = "circle"
    constructor(a = 0, b = 0, r = 0, obj = 0) {
        super("circle")
        this.r = r
        this.a = a
        this.b = b
        this.obj = obj
        if (this.obj && (!this.r)) {
            this.r = obj.r
            this.a = obj.a
            this.b = obj.b
        }

    }

    calc_area() {
        this.area = this.r * this.r * 3.14
        return this.area
    }

    calc_cir() {
        this.cir = (this.r + this.r) * 3.14
        return this.cir
    }

    log() {
        console.log(`Circumfer:${this.cir} ,Area:${this.area},Type:circle`);
    }
}

class draw_area {
    shapes = [];
    add_shape(shape_objects) {
        for (shape of shape_objects) {

            this.shapes.push(shape)
        }
    }

    log() {
        for (shape of this.shapes) {
            {
                console.log(`Circumfer:${shape.cir} ,Area:${shape.area},Type:${shape.type}`);
            }
        }
    }
}


// 
let test = new circle(0, 0, 10)
// if you want to pass object from same type just send it as 4th parameter and zero for all another parameter
let s1 = new circle(0, 0, 5, test)
s1.calc_area()
s1.calc_cir()
let s2 = new rectangle(10, 5)
s2.calc_area()
s2.calc_cir()
let s3 = new square(10, 5, 5)
s3.calc_area()
s3.calc_cir()
let s4 = new oval(10, 5)
s4.calc_area()
s4.calc_cir()
let d1 = new draw_area()
// console.log(d1.type);
d1.add_shape([s2, s3, s4, s1])
d1.log();
// console.log(s1.calc_cir(), c1.calc_area(), typeof (c1));