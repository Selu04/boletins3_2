import { useContext } from 'react';
import SettingsContext from './SettingsContext';

export default function Settings() {
    const { settings, updateSetting } = useContext(SettingsContext);

    const optionChange = (settingKey) => {
        updateSetting(settingKey, !settings[settingKey]);
    };

    return (
        <div>
            <h2>Configuracion</h2>
            <label>
                <input
                    type="checkbox"
                    checked={settings.notifications}
                    onChange={() => optionChange('notifications')}
                />
                Activar notificaciones
            </label>
            <br />
            <label>
                <input
                    type="checkbox"
                    checked={settings.darkMode}
                    onChange={() => optionChange('darkMode')}
                />
                Activar modo oscuro
            </label>
        </div>
    );
}