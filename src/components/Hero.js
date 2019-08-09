import React from "react"
import styled from "styled-components"

const Class = styled.a`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 367px;
  width: 280px;
  border-radius: 26px;
  background: #fff;
  box-shadow: 0px 8px 12px #bdccdb;
  margin-left: 16px;
  margin-top: 16px;
`

const Title = styled.h1`
  font-family: Roboto;
  font-weight: 800;
  font-size: 18px;
  text-align: center;
  color: #ff665f;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 0;
`

const Description = styled.h2`
  font-family: Roboto;
  font-weight: bold;
  font-size: 14px;
  color: #406081;
  text-align: center;
  margin-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  white-space: pre-wrap;
`

const SubDescription = styled.p`
  font-family: Roboto;
  font-weight: normal;
  font-size: 12px;
  color: #406081;
  text-align: center;
  margin: 2px;
  padding-left: 16px;
  padding-right: 16px;
  white-space: pre-wrap;
`

const Gold = styled.div`
  position: absolute;
  display: flex;
  width: 280px;
  border-radius: 26px;
  background: #f0f4f8;
  border-radius: 0px 0px 26px 26px;
  text-align: right;
  bottom: 0;
  justify-content: flex-end;
`
const Cost = styled.p`
  font-family: Roboto;
  font-weight: normal;
  font-size: 12px;
  color: #406081;
  margin: 10px;
  margin-left: 5px;
  margin-right: 12px;
`
const Currency = styled.img`
  width: 15px;
  height: 15px;
  margin-top: 10px;
  margin-bottom: 10px;
`

export default class extends React.Component {
  constructor() {
    super()
    this.state = {
      modalIsOpen: false,
    }

    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }

  handleOpenModal() {
    this.setState({ showModal: true })
  }

  handleCloseModal() {
    this.setState({ showModal: false })
  }

  render() {
    return (
      <div tabIndex="0">
        <Class onClick={this.handleOpenModal} tabIndex="0">
          <Title>{this.props.details.subclass}</Title>
          <SubDescription>
            Prerequisites:{" "}
            {this.props.details.prerequisite !== "---"
              ? this.props.details.prerequisite
              : "None"}
          </SubDescription>

          <SubDescription>
            Critical Hit: {this.props.details.criticalHit.chance} Chance of{" "}
            {this.props.details.criticalHit.damage} Damage
          </SubDescription>

          <SubDescription>
            Threat Rating: {this.props.details.threatRating}
          </SubDescription>

          <Description>Allowed Equipments:</Description>
          {this.props.details.equipments.map((equipment, index) => (
            <div key={index}>
              <SubDescription>
                Slot {equipment.slot}: {equipment.allowed.join(", ")}
              </SubDescription>
            </div>
          ))}
          <Gold>
            <Currency src={require(`../images/Currencies/gold.png`)} />
            <Cost>{this.props.details.cost.gold}</Cost>
            <Currency src={require(`../images/Currencies/gem.png`)} />
            <Cost>{this.props.details.cost.gems}</Cost>
            {this.props.details.stats.map((stat, index) => (
              <div style={{ display: "flex" }} key={index}>
                <Currency
                  src={require(`../images/Stat Indicators/${stat.name}.png`)}
                ></Currency>
                <Cost>{stat.amount}</Cost>
              </div>
            ))}
          </Gold>
        </Class>
      </div>
    )
  }
}