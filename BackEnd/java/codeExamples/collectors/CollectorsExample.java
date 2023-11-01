package collectors;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Function;
import java.util.stream.Collector;
import java.util.stream.Collectors;

class Product{
    int id;
    String name;
    float price;

    public Product(int id, String name, float price){
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

public class CollectorsExample {
    /**
     * @param args
     */
    public static void main(String[] args){
        List<Product> productList = new ArrayList<Product>();
        productList.add(new Product(1, "HP laptops", 25000f));
        productList.add(new Product(2, "Dell laptops", 30000f));
        productList.add(new Product(1, "Lenovo laptops", 35000f));
        productList.add(new Product(1, "Sony laptops", 40000f));
        // System.out.println(productList);
        List<Float> productPriceList = productList
        .stream()
        .map(x->x.price)
        .collect(Collectors.toList());
        System.out.println(productPriceList);
    }
}
