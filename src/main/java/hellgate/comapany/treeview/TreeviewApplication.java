package hellgate.comapany.treeview;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan
@SpringBootApplication
public class TreeviewApplication {

	public static void main(String[] args) {
		SpringApplication.run(TreeviewApplication.class, args);
	}
}
