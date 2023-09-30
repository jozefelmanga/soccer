package com.example.webdevteam.springaout.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="PLAYERS")
public class PlayerModel {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="PLAYER_ID")
	private Long id;
	private String name;
    private String position;
    private int age;
    private int number;
    @Column(length = 1000)
    private String playerImg;
    
   

	@ManyToOne
    @JoinColumn(name = "TEAM_ID")
    private TeamModel team;
    
	public TeamModel getTeam() {
		return team;
	}

	public void setTeam(TeamModel team) {
		this.team = team;
	}

	public PlayerModel() {
		
	}

	

	public PlayerModel(String name, String position, int age, int number, String playerImg, TeamModel team) {
		super();
		this.name = name;
		this.position = position;
		this.age = age;
		this.number = number;
		this.playerImg = playerImg;
		this.team = team;
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

	public String getPosition() {
		return position;
	}

	public void setPosition(String position) {
		this.position = position;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public int getNumber() {
		return number;
	}

	public void setNumber(int number) {
		this.number = number;
	}
	
	 public String getPlayerImg() {
			return playerImg;
		}

		public void setPlayerImg(String playerImg) {
			this.playerImg = playerImg;
		}

		@Override
		public String toString() {
			return "PlayerModel [id=" + id + ", name=" + name + ", position=" + position + ", age=" + age + ", number="
					+ number + ", playerImg=" + playerImg + ", team=" + team + "]";
		}

	
    
	
	
	
	 
	}
