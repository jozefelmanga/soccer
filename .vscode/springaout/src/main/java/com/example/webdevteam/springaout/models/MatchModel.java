package com.example.webdevteam.springaout.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="MATCHES")
public class MatchModel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="MATCH_ID")
	private Long id;
	private int scoreOne;
	private int scoreTwo;
	private String teamOne;
	private String teamTwo;
	@Column(length = 1000)
	private String urlOne;
	@Column(length = 1000)
	private String urlTwo;
	
	public MatchModel() {
		
	}

	public MatchModel(int scoreOne, int scoreTwo, String teamOne, String teamTwo, String urlOne, String urlTwo) {
		super();
		this.scoreOne = scoreOne;
		this.scoreTwo = scoreTwo;
		this.teamOne = teamOne;
		this.teamTwo = teamTwo;
		this.urlOne = urlOne;
		this.urlTwo = urlTwo;
	}

	public Long getId() {
		return id;
	}

	public int getScoreOne() {
		return scoreOne;
	}

	public void setScoreOne(int scoreOne) {
		this.scoreOne = scoreOne;
	}

	public int getScoreTwo() {
		return scoreTwo;
	}

	public void setScoreTwo(int scoreTwo) {
		this.scoreTwo = scoreTwo;
	}

	public String getTeamOne() {
		return teamOne;
	}

	public void setTeamOne(String teamOne) {
		this.teamOne = teamOne;
	}

	public String getTeamTwo() {
		return teamTwo;
	}

	public void setTeamTwo(String teamTwo) {
		this.teamTwo = teamTwo;
	}

	public String getUrlOne() {
		return urlOne;
	}

	public void setUrlOne(String urlOne) {
		this.urlOne = urlOne;
	}

	public String getUrlTwo() {
		return urlTwo;
	}

	public void setUrlTwo(String urlTwo) {
		this.urlTwo = urlTwo;
	}

	@Override
	public String toString() {
		return "MatchModel [id=" + id + ", scoreOne=" + scoreOne + ", scoreTwo=" + scoreTwo + ", teamOne=" + teamOne
				+ ", teamTwo=" + teamTwo + ", UrlOne=" + urlOne + ", UrlTwo=" + urlTwo + "]";
	}

	
	

}
