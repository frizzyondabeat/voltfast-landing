'use client';

import { Badge, badgeVariants } from './ui/badge';
import { NetworkState, useNetworkState } from '@/hooks/use-network-state';
import {
  Icon,
  PlugChargingIcon,
  PlugsConnectedIcon,
  PlugsIcon,
  WifiXIcon,
} from '@phosphor-icons/react';
import { VariantProps } from 'class-variance-authority';
import React from 'react';

const OnlineStatus = () => {
  const status = useNetworkState();
  const variantMapper: Record<
    NetworkState,
    VariantProps<typeof badgeVariants>['variant']
  > = {
    online: 'success',
    offline: 'danger',
    reconnecting: 'warning',
  };

  const IconMapper: Record<NetworkState, Icon> = {
    online: PlugsConnectedIcon,
    offline: PlugsIcon,
    reconnecting: WifiXIcon,
  };
  const StatusIcon = IconMapper[status];
  return (
    <Badge variant={variantMapper[status]} className="rounded-sm">
      <StatusIcon />
      {status}
    </Badge>
  );
};

export default OnlineStatus;
