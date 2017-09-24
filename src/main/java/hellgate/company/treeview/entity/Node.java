package hellgate.company.treeview.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Node {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private Integer parent;

    private String name;

    public Integer getId() {
        return id;
    }

    public void setId(Integer nodeId) {
        this.id = nodeId;
    }

    public Integer getParent() {
        return parent;
    }

    public void setParent(Integer parentId) {
        this.parent = parentId;
    }

    public String getName() {
        return name;
    }

    public void setName(String nodeName) {
        this.name = nodeName;
    }
}
