package com.example.webdevteam.springaout.models;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="TEAMS")
public class TeamModel {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="TEAM_ID")
	private Long id;
    private String name;
    private String owner;
    private String fondation;
    @Column(length = 1000)
    private String logoUrl;
    
    @OneToMany(mappedBy = "team", cascade = CascadeType.ALL)
    private List<PlayerModel> players;
    
    public TeamModel(String name, String owner, String fondation, String logoUrl, List<PlayerModel> players) {
		super();
		this.name = name;
		this.owner = owner;
		this.fondation = fondation;
		this.logoUrl = logoUrl;
		this.players = players;
	}

	public List<PlayerModel> getPlayers() {
		return players;
	}

	public void setPlayers(List<PlayerModel> players) {
		this.players = players;
	}

	
    
    public void addPlayer(PlayerModel player) {
        players.add(player);
        player.setTeam(this);
    }

    public void removePlayer(PlayerModel player) {
        players.remove(player);
        player.setTeam(null);
    }
    
	public TeamModel() {
		
	}

	public Long getId() {
		return id;
	}


	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getOwner() {
		return owner;
	}

	public void setOwner(String owner) {
		this.owner = owner;
	}

	public String getFondation() {
		return fondation;
	}

	public void setFondation(String fondation) {
		this.fondation = fondation;
	}

	public String getLogoUrl() {
		return logoUrl;
	}

	public void setLogoUrl(String logoUrl) {
		this.logoUrl = logoUrl;
	}

	@Override
	public String toString() {
		return "TeamModel [id=" + id + ", name=" + name + ", owner=" + owner + ", fondation=" + fondation
				+ ", logoUrl=" + logoUrl + "]";
	}

	
	
	 
	}
