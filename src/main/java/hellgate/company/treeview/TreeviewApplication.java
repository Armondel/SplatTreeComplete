package hellgate.company.treeview;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

@Configuration
@ComponentScan ({"hellgate.company.treeview.controller"})
@EntityScan ("hellgate.company.treeview.entity")
@EnableJpaRepositories("hellgate.company.treeview.repository")
@SpringBootApplication
public class TreeviewApplication  extends SpringBootServletInitializer{

    private static Log logger = LogFactory.getLog(TreeviewApplication.class);

    @Bean
    protected ServletContextListener listener(){
        return new ServletContextListener() {
            @Override
            public void contextInitialized(ServletContextEvent servletContextEvent) {
                logger.info("ServletContext initialized");
            }

            @Override
            public void contextDestroyed(ServletContextEvent servletContextEvent) {
                logger.info("ServletContext destroyed");
            }
        };
    }

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(TreeviewApplication.class);
    }

	public static void main(String[] args) {
		SpringApplication.run(TreeviewApplication.class, args);
	}
}
