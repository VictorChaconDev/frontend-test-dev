class Product {
  constructor({ id, brand, model, price, imgUrl, cpu, ram, os, displayResolution, battery, cameras, dimensions, weight, options }) {
    this.id = id;
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.imgUrl = imgUrl;
    this.cpu = cpu;
    this.ram = ram;
    this.os = os;
    this.displayResolution = displayResolution;
    this.battery = battery;
    this.cameras = cameras;
    this.dimensions = dimensions;
    this.weight = weight;
    this.options = options;
  }

  static fromApiResponse(data) {
    return new Product({
      id: data.id,
      brand: data.brand,
      model: data.model,
      price: data.price,
      imgUrl: data.imgUrl,
      cpu: data.cpu,
      ram: data.ram,
      os: data.os,
      displayResolution: data.displayResolution,
      battery: data.battery,
      cameras: data.cameras,
      dimensions: data.dimensions,
      weight: data.weight,
      options: data.options,
    });
  }
}

export default Product;