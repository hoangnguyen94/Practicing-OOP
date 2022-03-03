class Vehicle {
    constructor ( mk, md, yr )
    {
        this.make = mk;
        this.model = md;
        this.year = yr;
    }
    honk ()
    {
        return 'Beep.';
    }
    toString ()
    {
        return (`The vehicle is a ${this.make} ${this.model} from ${this.year}`)
    }
}

class Car extends Vehicle {
    constructor ( mk, md, yr )
    {
        super( mk, md, yr );
    }
    
    numbWheels ()
    {
        return 4;
    }
}

class Motorcycle extends Vehicle
{
    constructor ( mk, md, yr )
    {
        super(mk,md,yr)
    }
    numbWheels ()
    {
        return 2;
    }
    revEngine ()
    {
        return "VROOM!!!"
    }
}

class Garage
{
    constructor ( cap )
    {
        this.vehicle = [];
        this.capacity = cap;
    }
    add ( vehicle )
    {
        if ( !( vehicle instanceof Vehicle ) )
        {
            return "Only vehicles are allowed in here";
        }
        if ( this.vehicle.length >= this.capacity )
        {
            return "Sorry, we're full";
        }
        this.vehicle.push( vehicle );
        return 'Vehicle added';
    }
}