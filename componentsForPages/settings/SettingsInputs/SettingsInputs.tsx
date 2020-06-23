import React from "react";
import { withNaming } from "@bem-react/classname";
import classNames from "classnames/dedupe";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { attributes } from "~/constants/attributes";
import { FormInput, FormRadioGroup, FormRadio } from "~/helpers/antd-redux-form";
import { Divider, Modal } from "antd";
import { Button, Label } from "~/components";
import { SocialNetworkItem } from "./../index";
import { validate } from "./validate";
import { connect } from "react-redux";
import { IProps, IState } from "./interface";
import { deleteMe, me, getProviderConnectURL, disconnectProvider } from "~/redux/user";
import { defaultProps } from "./interface";
import Router from "next/router";
import { submit } from "./submit";
import { message } from "antd";

const cn = withNaming({ n: "", e: "__", m: "_", v: "_" });
const b = cn("settings-inputs");
const FORM_NAME = "settings";

class SettingsInputs extends React.Component<IProps & InjectedFormProps<any, IProps>, IState> {
  state = {
    deleteAccountModalVisible: false,
  };

  componentDidMount(): void {
    const { me } = this.props;
    me();
  }

  toggleModalVisible = (modalName: string) => {
    this.setState({
      deleteAccountModalVisible: false,
      [`${modalName}ModalVisible`]: !this.state[`${modalName}ModalVisible`],
    });
  };

  handleDeleteMe = () => {
    const { deleteMe } = this.props;
    deleteMe()
      .then(() => Router.push("/"))
      .catch(() => message.error("Не получилось вас удалить!"));
  };

  renderDeleteAccountModal = () => {
    return (
      <Modal
        title="Удалить аккаунт?"
        visible={this.state.deleteAccountModalVisible}
        onCancel={() => this.toggleModalVisible("deleteAccount")}
        footer={null}
      >
        <Label tip="После удаления профиль не будет больше никому доступен" />
        <Field name={attributes["причинаУдаленияАккаунта"]} component={FormRadioGroup} className={b("radio-group")}>
          <Field className={b("radio")} type="radio" value="1" title="Причина 1" component={FormRadio} />
          <Field className={b("radio")} type="radio" value="2" title="Причина 2" component={FormRadio} />
          <Field className={b("radio")} type="radio" value="3" title="Причина 3" component={FormRadio} />
        </Field>

        <Field
          className={b("textarea")}
          type="textarea"
          name={attributes["описаниеПричиныУдаленияАккаунта"]}
          component={FormInput}
        />

        <Button block onClick={this.handleDeleteMe}>
          Удалить аккаунт
        </Button>
      </Modal>
    );
  };

  handleSocialNetworkIconClick = async (provider: string) => {
    const { getProviderConnectURL, attached_social_accounts, disconnectProvider, me } = this.props;
    const socialNetWorkAttached = attached_social_accounts?.some((it) => it === provider);

    if (!socialNetWorkAttached) {
      const url = await getProviderConnectURL(provider);
      window.location.href = url;
    } else {
      await disconnectProvider(provider);
      me();
    }
  };

  render() {
    if (typeof window === "undefined") {
      return null;
    }
    const { className, handleSubmit, attached_social_accounts } = this.props;
    const socialNetworks = ["vkontakte", "facebook", "google", "yandex"];

    return (
      <div className={classNames(b(), className)}>
        <Field
          name={attributes["электроннаяПочта"]}
          component={FormInput}
          title="E-mail (логин)*"
          className={b("field")}
          value={"email@email.com"}
          disabled
        />

        <Divider className={b("divider")} />

        <div className={b("subtitle")}>Изменить пароль</div>

        <form onSubmit={handleSubmit(submit)}>
          <div className={b("row")}>
            <Field
              name={"current_password"}
              component={FormInput}
              type="password"
              title="Текущий пароль*"
              className={b("field")}
            />
            <Field
              name={"new_password"}
              component={FormInput}
              type="password"
              title="Новый пароль*"
              className={b("field")}
            />
          </div>
          <Button htmlType={"submit"} type="primary">
            Сохранить пароль
          </Button>
        </form>

        <Divider className={b("divider")} />

        <div className={b("subtitle")}>Социальные сети</div>
        <div className={b("social-grid")}>
          {socialNetworks.map((it: string) => (
            <SocialNetworkItem
              socIcon={it}
              turnOn={attached_social_accounts?.some((attachedSocialNetwork) => attachedSocialNetwork === it)}
              onClick={() => this.handleSocialNetworkIconClick(it)}
            />
          ))}
        </div>

        <Divider className={b("divider")} />

        <Button onClick={() => this.toggleModalVisible("deleteAccount")}>Удалить аккаунт</Button>
        {this.renderDeleteAccountModal()}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const attached_social_accounts = state.user?.user?.attached_social_accounts;
  return {
    attached_social_accounts,
  };
};

const mapDispatchToProps = (dispatch) => ({
  deleteMe: () => dispatch(deleteMe()),
  getProviderConnectURL: (provider: string) => dispatch(getProviderConnectURL(provider)),
  disconnectProvider: (provider: string) => dispatch(disconnectProvider(provider)),
  me: () => dispatch(me()),
});

let connectedComponent: any = reduxForm({ form: FORM_NAME, enableReinitialize: true, validate })(SettingsInputs);
connectedComponent = connect(mapStateToProps, mapDispatchToProps)(connectedComponent);
connectedComponent.defaultProps = defaultProps;

export { connectedComponent as SettingsInputs };
